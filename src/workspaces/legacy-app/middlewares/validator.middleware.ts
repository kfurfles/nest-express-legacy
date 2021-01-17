import path from 'path'
import { Request, Response, NextFunction } from 'express'
import { IValidator } from '../interfaces/validator.interface'
import { HttpError } from '../helpers/errors/http.error'

async function validatorMiddleware (req: Request, res: Response, next: NextFunction): Promise<Response | any> {
  try {

    if(req.method === 'GET') return next()
    const validatorsFolderPath = path.resolve(__dirname, `../helpers/validators/${req.path}.validator.ts`)
    const validator: IValidator = await import(validatorsFolderPath)
    const hasBody = Object.keys(req.body).length > 0
    const hasQuery = Object.keys(req.query).length > 0

    if (hasBody) {
      const { error } = validator.bodyValidate.validate(req.body)
      const hasError = Boolean(error?.message)

      if (hasError) throw new HttpError(error?.message ?? 'Bad Request', 400)
    }

    if (hasQuery) {
      const { error } = validator.queryValidate.validate(req.query)
      const hasError = Boolean(error?.message)

      if (hasError) throw new HttpError(error?.message ?? 'Bad Request', 400)
    }

    next()
  } catch (err) {
    return res.status(400).json(err)
  }
}

export { validatorMiddleware }
