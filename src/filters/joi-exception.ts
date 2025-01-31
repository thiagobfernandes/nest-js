import { ArgumentsHost, HttpException } from "@nestjs/common";
import { ExceptionError } from "src/generic-dtos/exception-error.dto";
import { Logger } from "src/logger/logger";
import {Response} from 'express'

const regex = /"([^"]+)"([^"]+)(?=(, "\w+"|$))/g

function ParseJoiErrors(exception: HttpException): Array<ExceptionError>{
    const errorsParseadJoi = Array<ExceptionError>()
    let match: RegExpExecArray | null =null

    while((match = regex.exec(exception.message)) !== null){
        errorsParseadJoi.push(new ExceptionError(match[1], match[2], 400, match[0]))
        Logger.error(`Joi Validation Error: Field "${match[1]}" with message "${match[2]}"`);  // Logando o erro
    }

    return errorsParseadJoi
    
}

export class JoiExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        Logger.error(`Exception caught: ${exception.message}`);

        const errors =  ParseJoiErrors(exception)
        

         response.status(exception.getStatus()).json(errors)
    }

}