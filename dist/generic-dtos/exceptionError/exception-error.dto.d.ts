export declare class ExceptionError {
    identifier: string;
    statusCode: number;
    message: string;
    error: string;
    constructor(identifier: string, error: string, statusCode: number, message: string);
}
