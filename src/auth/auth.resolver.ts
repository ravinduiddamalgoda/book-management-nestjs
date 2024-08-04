// src/auth/auth.resolver.ts

import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload } from './auth.payload';
import { RegisterUserInput } from './dto/register-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { User } from './entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async register(@Args('registerInput') registerInput: RegisterUserInput) {
    return this.authService.register(registerInput);
  }

  @Mutation(() => AuthPayload)
  async login(@Args('loginInput') loginInput: LoginUserInput) {
    return this.authService.login(loginInput);
  }

  @Query(() => [User])
  getAllUsers() {
    return this.authService.getAllUsers();
  }
}
