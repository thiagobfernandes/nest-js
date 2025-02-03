import { ExceptionError } from "src/generic-dtos/exception-error.dto";
import { ExceptionDTO } from "src/generic-dtos/exception.dto";

export class Logger {
  private static log(level: string, message: string): void {
    const messageReplace = message.replace("\n", "");
    console.log(`${new Date().toJSON()} ${level} ${messageReplace}`);
  }

  private static jsonErrorReplacer(_key: any, value: any): any {
    return value instanceof Error
      ? { name: value.name, message: value.message, stack: value.stack }
      : value;
  }

  public static startRoute(message: string): void {
    this.log("[ROUTE ----->]", message);
  }

  public static endRoute(message: string): void {
    this.log("[ROUTE <-----]", message);
  }
  public static trace(message: string): void {
    this.log("[TRACE]", message);
  }

  public static debug(message: string): void {
    this.log("[DEBUG]", message);
  }

  public static info(message: string): void {
    this.log("[INFO ]", message);
  }

  public static warn(message: string): void {
    this.log("[WARN ]", message);
  }

  public static Login(message: string): void {
    this.log("[INFO ]", message + " " + new Date().toJSON());
  }

  public static error(message: string, error?: any): void {
    this.log(
      "[ERROR]",
      `${message} ~ Exception: ${JSON.stringify(error, this.jsonErrorReplacer)}`,
    );
  }

  // private  static infer (message:string, error:any):void {
  //     if(error && error instanceof ExceptionDTO){
  //     const { type, ...exceptionDto} = error
  //     type === 'WARN' ? this.warn(message) : this.error(message, exceptionDto)
  //     } else {
  //         this.error(message, error)
  //     }

  // }
}
