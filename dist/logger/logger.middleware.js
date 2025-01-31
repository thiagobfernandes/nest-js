"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("./logger");
let LoggerMiddleware = class LoggerMiddleware {
    use(req, res, next) {
        const startTime = Date.now();
<<<<<<< HEAD
        logger_1.Logger.startRoute(`${req.method} ${req.url} HTTP/${req.httpVersion} ${req.url} ${req.headers?.['user-agent']}`);
        res.once('finish', () => {
            const duration = Date.now() - startTime;
            const logMessage = ` ${req.method}  HTTP/${req.httpVersion}  ${res.statusCode} ${req.url} ${req.headers?.['user-agent']} - ${duration}ms`;
=======
        logger_1.Logger.startRoute(`${req.method} ${req.url} HTTP/${req?.httpVersion} ${req.headers?.['user-agent']} ${req.headers?.['forwarded']}`);
        res.once('finish', () => {
            const duration = Date.now() - startTime;
            const logMessage = `${req.method} ${req.url} ${res.statusCode} - ${duration}ms`;
>>>>>>> cefa71bb8dff91a949cd89142c2f87886da7e3c4
            logger_1.Logger.endRoute(logMessage);
        });
        next();
    }
};
exports.LoggerMiddleware = LoggerMiddleware;
exports.LoggerMiddleware = LoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], LoggerMiddleware);
//# sourceMappingURL=logger.middleware.js.map