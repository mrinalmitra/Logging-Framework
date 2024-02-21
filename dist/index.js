"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleSink_1 = require("./components/ConsoleSink");
const DatabaseSink_1 = require("./components/DatabaseSink");
const LoggerMain_1 = require("./components/LoggerMain");
const LogCategory_1 = require("./interfaces/LogCategory");
const logger = LoggerMain_1.Logger.getInstance();
const console = new ConsoleSink_1.ConsoleSink();
const db = new DatabaseSink_1.DatabaseSink();
logger.addObserver(console);
logger.addObserver(db);
logger.log(LogCategory_1.LogCategory.INFO, 'This is an information message');
logger.log(LogCategory_1.LogCategory.ERROR, 'This is an error');
logger.log(LogCategory_1.LogCategory.DEBUG, 'This is a debug message');
//# sourceMappingURL=index.js.map