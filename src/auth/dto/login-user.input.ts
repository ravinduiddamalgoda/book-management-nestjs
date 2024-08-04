import { InputType , Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, isNumber, IsString, MinLength } from 'class-validator';


@InputType()
export class LoginUserInput {
    @Field()
    @IsNotEmpty({ message: 'Username is required.' })
    username: string;

    @Field()
    @IsNotEmpty({ message: 'Password is required.' })
    @MinLength(8, { message: 'Password must be at least 8 characters.' })
    password: string;
}