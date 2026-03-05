import type { Request, Response } from "express"
import type { IUser } from "../models/user-model"
import { AppError } from "../utils"
import { StatusCodes } from "http-status-codes"

export const registerUser = async (req: Request, res: Response) => {
  const data: IUser = req.body
  if (!data){
    throw new AppError(StatusCodes.BAD_REQUEST, "Provide all the details")
  }
  try{
    const response = 
  }catch(err){

  }
}