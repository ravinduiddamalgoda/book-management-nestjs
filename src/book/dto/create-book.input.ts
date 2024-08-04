import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, isNumber, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field()
  @IsNotEmpty({ message: 'Title is required.' })
  @IsString({message: 'Title must be a string.'})
  title: string;

  @Field()
  @IsNotEmpty({ message: 'Author is required.' })
  @IsString({message: 'Author must be a string.'})
  author: string;

  @Field()
  @IsNotEmpty({ message: 'Published year is required.' })
  publishedYear: number;

  @Field()
  @IsNotEmpty({ message: 'Genre is required.' })
  genre: string;
}
