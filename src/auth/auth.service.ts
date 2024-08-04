import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { addUser, findEmail, findUser, getAllUsers, payload, validateUser } from '../_user';
import { RegisterUserInput } from './dto/register-user.input';
import { User } from './entities/user.entity';
import { LoginUserInput } from './dto/login-user.input';
import { AuthPayload } from './auth.payload';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async register(registerUserInput:RegisterUserInput) {
    const existingUser = findUser(registerUserInput.username);
    if (existingUser) {
      throw new Error('User already exists');
    }
    const existingEmail = findEmail(registerUserInput.email);
    if (existingEmail) {
        throw new Error('Email already exists');
    }
    const newUser:User = await addUser(registerUserInput.username, registerUserInput.password, registerUserInput.email , registerUserInput.phoneNo);
    const resUser = {...newUser};
    resUser.password = 'Not Accessible';
    return resUser;
  }

  async login(loginInput : LoginUserInput) {
    const isValid = await validateUser(loginInput.username, loginInput.password);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }
    const user:User = findUser(loginInput.username);
    return this.createToken(user);
  }

  private createToken(user: User) {
    const payload : payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  getAllUsers() {
    return getAllUsers();
  }
}
