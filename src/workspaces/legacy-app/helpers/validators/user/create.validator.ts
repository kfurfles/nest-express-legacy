import joi from 'joi'

const bodyValidate = joi.object({
  name: joi.string().min(3).max(20).required(),
  age: joi.number().required(),
  cep: joi.string().min(8).max(8).required()
})

export {
  bodyValidate
}
