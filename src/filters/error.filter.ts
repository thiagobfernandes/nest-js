import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from "@nestjs/common";
import { ExceptionError } from "src/generic-dtos/exception-error.dto";
import { ExpressRequest } from "src/generic-dtos/token.dto";
import { Response } from 'express'; 


@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse<Response>();
        const status = exception.getStatus()

        const message = exception.getResponse() as string;

        const errorResponse = new ExceptionError('Not Found', 'Recurso não encontrado', status, message);
      
        response.status(status).json(errorResponse);


    }

}