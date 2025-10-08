import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LoginToken } from './login-token.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => LoginToken, (loginToken) => loginToken.user)
    loginTokens: LoginToken[];
}