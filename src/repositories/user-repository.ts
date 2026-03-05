import type { Model } from "mongoose";
import type { IUser } from "../models/user-model";
import { User } from "../models/user-model";
import { CrudRepository } from "./crud-repository";

export class UserRepository extends CrudRepository<IUser>{
  constructor(){
    super(User as Model<IUser>)
  }
  async getByEmail(email: string){
    const response = await this.model.findOne({email})
    return response
  }
}