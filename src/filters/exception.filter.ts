import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { ExceptionError } from "src/generic-dtos/exceptionError/exception-error.dto";



@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    
    const exceptionError = new ExceptionError(exception.message, exception.name, exception.statusCode,  exception.message);
    Logger.error(exceptionError.message, exception.stack);
    response.json(exceptionError);

    }
}