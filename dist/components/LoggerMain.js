"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const LogMessage_1 = require("./LogMessage");
class Logger {
    constructor() {
        this.observers = [];
    }
    static getInstance() {
        if (!Logger.loggerInstance) {
            Logger.loggerInstance = new Logger();
        }
        return Logger.loggerInstance;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(ob => ob !== observer);
    }
    notifyObservers(logMessage) {
        this.observers.forEach(observer => {
            observer.update(logMessage);
        });
    }
    log(category, message) {
        let msg = new LogMessage_1.LogMessage(message, category);
        this.notifyObservers(msg);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=LoggerMain.js.map