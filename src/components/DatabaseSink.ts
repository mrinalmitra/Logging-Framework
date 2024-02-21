import { ILogMessage } from "../interfaces/LogMessage";
import { Iobserver } from "../interfaces/Observer";

export class DatabaseSink implements Iobserver{

    connectDB():void{
        console.log('DB connected')
    }

    update(logMessage: ILogMessage): void {
        this.connectDB();
     console.log(`[DB Sink] ${logMessage.category}: ${logMessage.message}`)
    }
    
}