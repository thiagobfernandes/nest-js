export declare class Logger {
    private static log;
    private static jsonErrorReplacer;
    static startRoute(message: string): void;
    static endRoute(message: string): void;
    static trace(message: string): void;
    static debug(message: string): void;
    static info(message: string): void;
    static warn(message: string): void;
    static Login(message: string): void;
    static error(message: string, error?: any): void;
}
