import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, isNumber, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterUserInput {
    @Field()
    username: string;
    
    @Field()
    @IsNotEmpty({ message: 'Password is required.' })
    @MinLength(8, { message: 'Password must be at least 8 characters.' })
    password: string;
    
    
    @Field()
    @IsNotEmpty({ message: 'Email is required.' })
    @IsEmail({}, { message: 'Email is invalid.' })
    email: string;
    
    @Field()
    @IsNotEmpty({ message: 'Phone Number is required.' })
    phoneNo: number;
}