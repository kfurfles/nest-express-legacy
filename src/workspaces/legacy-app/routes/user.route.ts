import { Router } from 'express'
import { CreateUserService } from '../services/user/create.service'
import { UserRepository } from '../respositories/user.repository'
import { DataBase } from '../config/database.config'

const userRouter = Router()
const database = new DataBase()
const userRespository = new UserRepository(database)
const createUserService = new CreateUserService(userRespository)

userRouter.post('/create', async (req, res) => {
  try {
    const { name, age, cep } = req.body
    const userCreated = await createUserService.execute({ name, age, cep })

    return res.status(200).json(userCreated)
  } catch (err) {
    return res.status(err.statusCode ?? 500).json(err)
  }
})

userRouter.get('/', (req, res) => {
  res.status(200).send('hello you')
})

export { userRouter }
