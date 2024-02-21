import { LogCategory } from "../interfaces/LogCategory";
import { ILogMessage } from "../interfaces/LogMessage";

export class LogMessage implements ILogMessage{
    message: string;
    category: LogCategory;

    constructor(message: string, category: LogCategory){
        this.message = message
        this.category = category
    }
    
}