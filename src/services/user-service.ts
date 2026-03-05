import { StatusCodes } from "http-status-codes";
import { UserRepository } from "../repositories";
import { AppError } from "../utils";
import bcrypt from "bcrypt";

const userRepository = new UserRepository();

export const createUser = async (data: {
  userName: string;
  email: string;
  password: string;
  gender: string;
  location: string;
}) => {
  const userExist = await userRepository.getByEmail(data.email);
  if (userExist) {
    throw new AppError(StatusCodes.CONFLICT, "User already exists");
  }
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await userRepository.create({
      userName: data.userName,
      email: data.email,
      password: hashedPassword,
      gender: data.gender,
      location: data.location,
    });
    if (!user) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        "Something went wrong",
      );
    }
    return user;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
    );
  }
};
