export class ExceptionError {
  identifier: string;
  statusCode: number;
  message: string;
  error: string;

  constructor(
    identifier: string,
    error: string,
    statusCode: number,
    message: string,
  ) {
    this.identifier = identifier;
    this.error = error;
    this.statusCode = statusCode;
    this.message = message;
  }
}
