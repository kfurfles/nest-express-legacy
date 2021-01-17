import { validatorMiddleware } from './middlewares/validator.middleware'
import { logMiddleware } from './middlewares/log.middleware'
import { userRouter } from './routes/user.route'
import { Express } from 'express'

export function useExpress(server: Express){

  server.use(validatorMiddleware)
  server.use(logMiddleware)
  server.use('/user', userRouter)
  
  // commented because the server will go up here more, but just to show that it was the same way as in express
  // server.listen(
  //   process.env.PORT,
  //   () => console.log(`Server is running on port ${process.env.PORT ?? 3000}`)
  // )
}