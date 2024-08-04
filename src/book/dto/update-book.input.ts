import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateBookInput } from './create-book.input';
import { IsEmail, isNotEmpty, IsNotEmpty, isNumber, IsString, MinLength } from 'class-validator';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field()
  @IsNotEmpty({ message: 'ID is required.' })
  id: number;
}
