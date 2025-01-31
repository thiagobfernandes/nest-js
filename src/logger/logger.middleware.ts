import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Logger } from "./logger";


@Injectable()
export class LoggerMiddleware implements NestMiddleware {


  
    use(req:any, res:any, next: () => void){
        const startTime = Date.now();

        Logger.startRoute(`${req.method} ${req.url} HTTP/${req.httpVersion}  ${req.headers?.['user-agent']}`);
      
        res.once('finish', () => {
            const duration = Date.now() - startTime
            const logMessage = ` ${req.method}  HTTP/${req.httpVersion}  ${res.statusCode} ${req.url} ${req.headers?.['user-agent']} - ${duration}ms`
      
            Logger.endRoute(logMessage)
          }) 

          next(); 
    }
      
        }
        
