import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('send-link')
    async sendMagicLink(@Body() body: { email: string }) {
        return this.authService.sendMagicLink(body.email);
    }

    @Get('verify')
    async verifyToken(@Query('token') token: string, @Query('email') email: string) {
        return this.authService.verifyToken(token, email);
    }
}