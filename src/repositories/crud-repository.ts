import { Model } from "mongoose";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../utils";
class CrudRepository<T>{
  constructor(protected model: Model<T>){}

  async create(data: T){
    const response = await this.model.create(data)
    return response
  }
  async destroy(id: string){
    const response = await this.model.findByIdAndDelete(id)
    if (!response){
      throw new AppError(StatusCodes.NOT_FOUND, "Cannot find any resource")
    }
    return response
  }

}