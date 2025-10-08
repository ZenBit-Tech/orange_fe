import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('login_tokens')
export class LoginToken {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    token: string;

    @Column()
    expiry: Date;

    @ManyToOne(() => User, (user) => user.loginTokens, { onDelete: 'CASCADE' })
    user: User;
}