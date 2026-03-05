import type { IUser } from "../models/user-model";
import { CrudRepository } from "./crud-repository";

export class UserRepository extends CrudRepository<IUser>{
  constructor(){
    super
  }
}