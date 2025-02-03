import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { ExceptionError } from "src/generic-dtos/exception-error.dto";
import { Logger } from "src/logger/logger";

@Catch(ExceptionError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const exceptionError = new ExceptionError(
      exception.identifier,
      exception.error,
      exception.statusCode,
      exception.message,
    );

    Logger.error(exceptionError.message, exception.stack);
    response.json(exceptionError);
  }
}
