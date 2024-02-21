"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSink = void 0;
class DatabaseSink {
    connectDB() {
        console.log('DB connected');
    }
    update(logMessage) {
        this.connectDB();
        console.log(`[DB Sink] ${logMessage.category}: ${logMessage.message}`);
    }
}
exports.DatabaseSink = DatabaseSink;
//# sourceMappingURL=DatabaseSink.js.map