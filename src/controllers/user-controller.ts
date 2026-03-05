import type { Request, Response } from "express"
import { AppError } from "../utils"
import { StatusCodes } from "http-status-codes"
import { UserService } from "../services"
import { ErrorResponse, SuccessResponse } from "../utils/common"

export const registerUser = async (req: Request, res: Response) => {
  const {userName, email, password, gender, location} = req.body
  if (!userName || !email || !password || !gender || !location){
    throw new AppError(StatusCodes.BAD_REQUEST, "Provide all the details")
  }
  try{
    const response = await UserService.createUser({userName, email, password, gender, location})
    SuccessResponse.data = response
    return res.status(StatusCodes.CREATED).json(SuccessResponse)
  }catch(err: any){
    if (err instanceof AppError){
      ErrorResponse.error = err.errorInfo
      return res.status(err.statusCode).json(ErrorResponse)
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "Something went wrong"})
  }
}