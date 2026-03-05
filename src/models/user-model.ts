import mongoose, {Document, Schema} from "mongoose"

export interface IUser extends Document{
  userName: string,
  email: string,
  password: string,
  gender: string,
  role: string,
  location: string
}

const userSchema: Schema<IUser> = new Schema({
  userName:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender:{
    type: String,
    enum: ["male", "female"],
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true
  },
  location:{
    type: String,
    rquired: true
  }
})

export const User = mongoose.model<IUser>("User", userSchema)