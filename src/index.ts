import { ConsoleSink } from "./components/ConsoleSink";
import { DatabaseSink } from "./components/DatabaseSink";
import { Logger } from "./components/LoggerMain";
import { LogCategory } from "./interfaces/LogCategory";

const logger = Logger.getInstance();
const console = new ConsoleSink();
const db = new DatabaseSink();

logger.addObserver(console);
logger.addObserver(db);

logger.log(LogCategory.INFO,'This is an information message')
logger.log(LogCategory.ERROR, 'This is an error')
logger.log(LogCategory.DEBUG, 'This is a debug message')
