import { HttpStatus } from "@nestjs/common";

export class ExceptionError {
  identifier: string;
  statusCode: HttpStatus;
  message: string;
  error: string;

  constructor(
    identifier: string,
    error: string,
    statusCode: HttpStatus,
    message: string,
  ) {
    this.identifier = identifier;
    this.error = error;
    this.statusCode = statusCode;
    this.message = message;
  }
}
