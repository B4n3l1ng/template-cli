import { Schema, model } from 'mongoose';
import { UserModel } from '../interfaces';

const userSchema = new Schema<UserModel>(
  {
    email: {
      type: String,
      required: [true, 'Email is requires.'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    hashedPassword: {
      type: String,
      required: [true, 'Password is required.'],
    },
    image: {
      type: String,
      default: 'https://res.cloudinary.com/dtiihknqe/image/upload/v1706280251/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV_han5ci.jpg',
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<UserModel>('User', userSchema);
