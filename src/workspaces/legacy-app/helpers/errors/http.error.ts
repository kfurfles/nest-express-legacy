export class HttpError extends Error {
  statusCode: number

  constructor (message: string, statusCode: number) {
    super()
    this.name = 'HTTP Error'
    this.message = message
    this.statusCode = statusCode
  }
}
