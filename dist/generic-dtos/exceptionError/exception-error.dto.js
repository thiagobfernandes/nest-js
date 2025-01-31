"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionError = void 0;
class ExceptionError {
    constructor(identifier, error, statusCode, message) {
        this.identifier = identifier;
        this.error = error;
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ExceptionError = ExceptionError;
//# sourceMappingURL=exception-error.dto.js.map