import type { IUser } from "../models/user-model"
import { UserRepository } from "../repositories"

const userRepository = new UserRepository

export const createUser = async (data: {
  userName: string,
  email: string,
  password: string,
  gender: string,
  location: string
}) => {
  try{
    const user = await userRepository.create(data)
  }catch(err){

  }
}