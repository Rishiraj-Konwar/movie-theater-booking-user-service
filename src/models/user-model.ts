import mongoose, {Document, Schema} from "mongoose"

export interface IUser extends Document{
  userName: string,
  email: string,
  password: string,
  role: string,
  location: string
}

const userSchema: Schema<IUser> = new Schema  