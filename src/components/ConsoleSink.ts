import { ILogMessage } from "../interfaces/LogMessage";
import { Iobserver } from "../interfaces/Observer";

export class ConsoleSink implements Iobserver{

    update(logMessage: ILogMessage): void {
        console.log(`[Console Sink] ${logMessage.category}: ${logMessage.message}`)
    }
    
}