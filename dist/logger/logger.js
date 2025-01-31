"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static log(level, message) {
        const messageReplace = message.replace('\n', '');
<<<<<<< HEAD
        console.log(`${new Date().toJSON()} ${level} ${messageReplace}`);
    }
    static jsonErrorReplacer(_key, value) {
        return value instanceof Error ? { name: value.name, message: value.message, stack: value.stack } : value;
    }
    static startRoute(message) {
        this.log('[ROUTE ----->]', message);
    }
    static endRoute(message) {
        this.log('[ROUTE <-----]', message);
    }
    static trace(message) {
        this.log('[TRACE]', message);
    }
    static debug(message) {
        this.log('[DEBUG]', message);
    }
    static info(message) {
        this.log('[INFO ]', message);
    }
    static warn(message) {
        this.log('[WARN ]', message);
    }
    static error(message, error) {
        this.log('[ERROR]', `${message} ~ Exception: ${JSON.stringify(error, this.jsonErrorReplacer)}`);
=======
        console.log(`${new Date().toJSON} ${messageReplace}`);
    }
    static startRoute(message) {
        this.log('[------->]', message);
    }
    static endRoute(message) {
        this.log('[<------]', message);
    }
    static startJob(message) {
        this.log('[------->]', message);
    }
    static endJob(message) {
        this.log('[<------]', message);
>>>>>>> cefa71bb8dff91a949cd89142c2f87886da7e3c4
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map