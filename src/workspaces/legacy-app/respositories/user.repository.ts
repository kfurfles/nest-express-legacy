import { DataBase } from '../config/database.config'
import { UserModel } from '../models/user.model'

export class UserRepository {
  private readonly database

  constructor (database: DataBase) {
    this.database = database
  }

  create (user: UserModel): UserModel {
    this.database.users.push(user)

    return user
  }
}
