import { ILogMessage } from "./LogMessage";

export interface Iobserver{
    update(logMessage: ILogMessage): void
}