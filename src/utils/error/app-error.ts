export class AppError extends Error{
  statusCode: number
  errorInfo: string 
  constructor(statusCode: number, message: string){
    super(message)
    this.statusCode = statusCode
    this.errorInfo = message
  }
}