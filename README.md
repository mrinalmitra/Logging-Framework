# Logging-Framework

A simple logging framework implemented in TypeScript, demonstrating the Observer pattern. The framework allows for logging messages of different categories to various sinks, such as the console, file, and database.

Components
1. Logger
The Logger class is a singleton responsible for managing observers (sinks) and notifying them when a log message is generated.

Methods:
getInstance(): Logger: Returns the singleton instance of the Logger.
addObserver(observer: LoggerObserver): void: Adds an observer (sink) to the Logger.
removeObserver(observer: LoggerObserver): void: Removes an observer from the Logger.
notifyObservers(logMessage: LogMessage): void: Notifies all registered observers about a new log message.
log(category: LogCategory, message: string): void: Logs a message with a specified category.

2. LogMessage
The LogMessage class represents a log message with a category (enum) and a message.

Properties:
category: LogCategory: Enum representing the log category (INFO, ERROR, DEBUG).
message: string: The log message content.

3. LoggerObserver
The LoggerObserver interface declares the update method that concrete observers must implement.

Methods:
update(logMessage: LogMessage): void: Called by the Logger to notify the observer about a new log message.

4. ConsoleSink, DatabaseSink
Concrete observers (sinks) that implement the LoggerObserver interface to handle log messages in different ways.