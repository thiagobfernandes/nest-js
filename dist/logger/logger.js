"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static log(level, message) {
        const messageReplace = message.replace('\n', '');
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
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map