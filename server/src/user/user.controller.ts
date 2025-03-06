import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    getMe(@Req() req) {
        return req.user;
    }
}
