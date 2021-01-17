import { UserRepository } from '../../respositories/user.repository'
import { UserModel } from '../../models/user.model'
import { HttpError } from '../../helpers/errors/http.error'
import { IService } from '../../interfaces/service.interface'
import { getAddressData } from '../../clients/viacep.client'

interface Request {
  name: string
  age: number
  cep: string
}

export class CreateUserService implements IService {
  userRespository: UserRepository

  constructor (repository: UserRepository) {
    this.userRespository = repository
  }

  async execute (request: Request): Promise<UserModel> {
    const { name, age, cep } = request

    if (age < 18) {
      throw new HttpError('User is too young', 403)
    }

    const address = await getAddressData(cep)

    const user = new UserModel({ name, age, address })

    const userCreated = this.userRespository.create(user)

    return userCreated
  }
}
