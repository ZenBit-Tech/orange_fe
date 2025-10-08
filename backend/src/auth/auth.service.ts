import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as nodemailer from 'nodemailer';
import * as uuid from 'uuid';
import { User } from './entities/user.entity';
import { LoginToken } from './entities/login-token.entity';

const TOKEN_EXPIRY_HOURS = 24;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;

@Injectable()
export class AuthService {
    constructor(
        private configService: ConfigService,
        private jwtService: JwtService,
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(LoginToken) private loginTokenRepository: Repository<LoginToken>,
        private dataSource: DataSource,  // For transactions
    ) {}

    async sendMagicLink(email: string): Promise<{ message: string }> {
        if (!EMAIL_REGEX.test(email)) {
            throw new BadRequestException('Please enter a valid email');
        }

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            let user = await queryRunner.manager.findOne(User, { where: { email } });
            if (!user) {
                user = queryRunner.manager.create(User, { email });
                await queryRunner.manager.save(user);
            }

            const token = uuid.v4();
            const expiry = new Date(Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);

            const loginToken = queryRunner.manager.create(LoginToken, {
                token,
                expiry,
                user,
            });
            await queryRunner.manager.save(loginToken);

            await queryRunner.commitTransaction();


            const frontendUrl = this.configService.get<string>('FRONTEND_URL');
            const uploadPath = this.configService.get<string>('UPLOAD_PATH');
            const link = `${frontendUrl}${uploadPath}?token=${token}&email=${email}`;

            const transporter = nodemailer.createTransport({
                host: this.configService.get<string>('EMAIL_HOST'),
                port: this.configService.get<number>('EMAIL_PORT'),
                secure: false,
                auth: {
                    user: this.configService.get<string>('EMAIL_USER'),
                    pass: this.configService.get<string>('EMAIL_PASSWORD'),
                },
            });

            await transporter.sendMail({
                from: this.configService.get<string>('EMAIL_USER'),
                to: email,
                subject: 'Your Sign-In Link',
                html: `<p>Click <a href="${link}">here</a> to sign in. This link expires in 24 hours.</p>`,
            });

            return { message: `Sign-in link sent to ${email}` };
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async verifyToken(token: string, email: string): Promise<{ accessToken: string }> {
        const loginToken = await this.loginTokenRepository.findOne({
            where: { token },
            relations: ['user'],
        });

        if (!loginToken || loginToken.user.email !== email || loginToken.expiry < new Date()) {
            throw new UnauthorizedException('Confirmation link was expired');
        }

        const payload = { sub: loginToken.user.id, email: loginToken.user.email };
        const accessToken = this.jwtService.sign(payload);

        // Delete used token
        await this.loginTokenRepository.remove(loginToken);

        return { accessToken };
    }
}