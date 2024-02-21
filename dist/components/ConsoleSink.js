"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleSink = void 0;
class ConsoleSink {
    update(logMessage) {
        console.log(`[Console Sink] ${logMessage.category}: ${logMessage.message}`);
    }
}
exports.ConsoleSink = ConsoleSink;
//# sourceMappingURL=ConsoleSink.js.map