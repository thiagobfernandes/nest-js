import { ArgumentsHost, BadRequestException, Catch, HttpException } from "@nestjs/common";
import { ExceptionError } from "src/generic-dtos/exception-error.dto";
import { Logger } from "src/logger/logger";
import { Response } from "express";
import { stat } from "fs";

const regex = /"([^"]+)"([^"]+)(?=(, "\w+"|$))/g;

function ParseJoiErrors(exception: HttpException): Array<ExceptionError> {
  const errorsParseadJoi = Array<ExceptionError>();
  let match: RegExpExecArray | null = null;

  while ((match = regex.exec(exception.message)) !== null) {


    errorsParseadJoi.push(
      new ExceptionError(match[1], `${ match[1]}${match[2]}`, 400, match.input.replace(/"/g, '')),
    );
    Logger.error(
      `Joi Validation Error: Field "${match[1]}" with message "${match[2]}"`,
    ); 
  }

  return errorsParseadJoi;
}

@Catch(BadRequestException)
export class JoiExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    Logger.error(`Exception caught: ${exception.message}`);
    const errors = ParseJoiErrors(exception);
    response.json(errors);
  }
}
