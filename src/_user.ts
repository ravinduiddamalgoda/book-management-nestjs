// _users.ts

import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

export interface User {
  id: string;
  username: string;
  password: string;
  email : string;
  phoneNo : number;
}

export interface payload {
    username: string;
    sub: string | number;
}

export const users: User[] = [];

export const addUser = async (username: string, password: string , email : string , phoneNo : number) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: uuidv4(),
    username,
    password: hashedPassword,
    email,
    phoneNo
  };
  users.push(newUser);
  return newUser;
};

export const findUser = (username: string): User => {
  return users.find(user => user.username === username);
};

export const findEmail = (email: string): User => {
    return users.find(user => user.email === email);
}

export const getAllUsers = (): User[] => {
    return users;
}

export const validateUser = async (username: string, password: string): Promise<boolean> => {
  const user = findUser(username);
//   console.log(user);
  if (!user) {
    console.log('User not found');
    return false;
  }
  return await bcrypt.compare(password, user.password);
};
