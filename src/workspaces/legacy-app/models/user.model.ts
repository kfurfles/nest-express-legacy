import { v4 } from 'uuid'
import { IAddress } from '../interfaces/address.interface'

export class UserModel {
  id: string
  name: string
  age: number
  address: IAddress

  constructor ({ name, age, address }: Omit<UserModel, 'id'>) {
    this.id = v4()
    this.name = name
    this.age = age
    this.address = address
  }
}
