import { HttpStatus } from "@nestjs/common";

export class ResponseDTO {
data: any;
message: string;
statusCode: HttpStatus;
page?: number;
pageSize?: number;
elements?: number;

constructor(data: any, message: string, statusCode: HttpStatus, page?: number, pageSize?: number, elements?: number) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.page = page;
    this.pageSize = pageSize;
    this.elements = elements;
}
}