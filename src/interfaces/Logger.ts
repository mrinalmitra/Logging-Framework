import { ILogMessage } from "./LogMessage";
import { Iobserver } from "./Observer";

export interface Ilogger{
    addObserver(observer: Iobserver): void
    removeObserver(observer: Iobserver):void
    notifyObservers(logMessage: ILogMessage): void
}