import { ObjectSchema } from 'joi'

export interface IValidator {
  bodyValidate: ObjectSchema
  queryValidate: ObjectSchema
}
