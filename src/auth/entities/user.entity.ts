import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;
  
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  phoneNo: number;
}
