import { HttpStatus } from "@nestjs/common";

export type ExceptionType = "ERROR" | "WARN";
export class ExceptionDTO extends Error {
  public reasons: Array<ExceptionDTO>;
  public reason: ExceptionDTO;
  public statusCode: HttpStatus;

  public type: ExceptionType;
  public details: string;

  constructor(
    type: ExceptionType,
    message: string,
    reason?: ExceptionDTO,
    reasons?: Array<any>,
    statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    super(message);
    this.type = type;
    this.details = message;
    this.statusCode = statusCode;
    if (reason) this.reason = reason;
    if (reasons) this.reasons = reasons;
  }

  static withErrors(
    message: string,
    reasons?: Array<ExceptionDTO>,
    statusCode?: HttpStatus,
  ): ExceptionDTO {
    return new ExceptionDTO("ERROR", message, undefined, reasons, statusCode);
  }

  static withWarnings(
    message: string,
    reasons?: Array<ExceptionDTO>,
    statusCode?: HttpStatus,
  ): ExceptionDTO {
    return new ExceptionDTO("WARN", message, undefined, reasons, statusCode);
  }

  static withError(
    message: string,
    reason?: ExceptionDTO,
    statusCode?: HttpStatus,
  ): ExceptionDTO {
    return new ExceptionDTO("ERROR", message, reason, undefined, statusCode);
  }

  static withWarning(
    message: string,
    reason?: ExceptionDTO,
    statusCode?: HttpStatus,
  ): ExceptionDTO {
    return new ExceptionDTO("WARN", message, reason, undefined, statusCode);
  }
}
