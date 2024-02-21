import { LogCategory } from "../interfaces/LogCategory";
import { ILogMessage } from "../interfaces/LogMessage";
import { Ilogger } from "../interfaces/Logger";
import { Iobserver } from "../interfaces/Observer";
import { LogMessage } from "./LogMessage";

export class Logger implements Ilogger{

    private static loggerInstance: Logger
    private observers: Iobserver[] = []

    private constructor(){
    }

    static getInstance(): Logger{
        if(!Logger.loggerInstance){
            Logger.loggerInstance = new Logger()
        }
        return Logger.loggerInstance
    }

    addObserver(observer: Iobserver): void {
        this.observers.push(observer)
    }
    removeObserver(observer: Iobserver): void {
        this.observers = this.observers.filter(ob=> ob!==observer)
    }
    notifyObservers(logMessage: ILogMessage): void {
        this.observers.forEach(observer=>{
            observer.update(logMessage)
        })
    }
    log(category: LogCategory, message: string){
        let msg = new LogMessage(message,category);
        this.notifyObservers(msg)
    }
    
}