import { env } from 'process';

// Define custom window interface
declare global {
  interface Window {
    errorTracker?: {
      captureException(error: Error, options?: { extra?: any }): void;
    };
  }
}

// Enum defining log levels with increasing severity
export enum LogLevel {
  ERROR = 'error', // Critical issues that require immediate attention
  WARN = 'warn', // Potential problems or unexpected conditions
  INFO = 'info', // General informational events
  DEBUG = 'debug', // Detailed debugging information
}

// Interface for additional log context metadata
// Allows attaching arbitrary key-value pairs to log entries
interface LogContext {
  [key: string]: any;
}

// Configuration interface for logger initialization
// Provides flexible setup options for logging behavior
interface LoggerConfig {
  level?: LogLevel; // Minimum log level to output
  enabled?: boolean; // Global logging enable/disable switch
  prefix?: string; // Prefix for identifying log sources
}

class Logger {
  // Singleton instance to ensure consistent logging across application
  private static instance: Logger;

  // Internal configuration for the logger
  private config: LoggerConfig;

  // Private constructor to prevent direct instantiation
  // Enforces singleton pattern and allows initial configuration
  private constructor(config: LoggerConfig = {}) {
    // Merge default configuration with provided settings
    this.config = {
      level: config.level || LogLevel.INFO, // Default to INFO level
      enabled: config.enabled ?? true, // Enabled by default
      prefix: config.prefix || 'App', // Default prefix if not specified
    };
  }

  // Singleton access method to get or create logger instance
  // Ensures only one logger instance exists throughout the application
  public static getInstance(config?: LoggerConfig): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(config);
    }
    return Logger.instance;
  }

  // Update logger configuration dynamically
  // Allows runtime modifications to logging behavior
  public setConfig(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  // Determine if a log should be output based on current configuration
  // Implements log level hierarchy and global enable/disable
  private shouldLog(level: LogLevel): boolean {
    // Defines priority order of log levels
    const logLevelPriority = [
      LogLevel.ERROR,
      LogLevel.WARN,
      LogLevel.INFO,
      LogLevel.DEBUG,
    ];

    // Compare current config level with target log level
    const currentLevelIndex = logLevelPriority.indexOf(this.config.level!);
    const targetLevelIndex = logLevelPriority.indexOf(level);

    // Log only if enabled and level is within configured threshold
    if (this.config.enabled && targetLevelIndex <= currentLevelIndex) {
      return true;
    }
    return false;
  }

  // Create standardized log entry with consistent formatting
  // Includes timestamp, prefix, level, message, and optional context
  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: LogContext
  ): string {
    const timestamp = new Date().toISOString();
    const logContext = context ? JSON.stringify(context) : '';
    return `[${timestamp}] [${this.config.prefix}] [${level.toUpperCase()}] ${message} ${logContext}`;
  }

  // Error logging with comprehensive error handling
  // Supports optional error objects and contextual metadata
  public error(message: string, error?: Error, context?: LogContext): void {
    // Check if error logging is permitted
    if (!this.shouldLog(LogLevel.ERROR)) return;

    // Combine message with error details if available
    const fullMessage = error ? `${message} - ${error.message}` : message;

    // Create standardized log entry
    const logEntry = this.createLogEntry(LogLevel.ERROR, fullMessage, context);

    // Log in browser environment
    if (typeof window !== 'undefined') {
      console.error(logEntry);
      // Send to external monitoring service
      this.sendErrorToMonitoring(fullMessage, error, context);
    }

    // Log in server-side environment
    if (typeof window === 'undefined') {
      console.error(logEntry);
    }
  }

  // Warning level logging with optional context
  public warn(message: string, context?: LogContext): void {
    // Check if warning logging is permitted
    if (!this.shouldLog(LogLevel.WARN)) return;

    // Create and output warning log entry
    const logEntry = this.createLogEntry(LogLevel.WARN, message, context);
    console.warn(logEntry);
  }

  // Information level logging with optional context
  public info(message: string, context?: LogContext): void {
    // Check if info logging is permitted
    if (!this.shouldLog(LogLevel.INFO)) return;

    // Create and output information log entry
    const logEntry = this.createLogEntry(LogLevel.INFO, message, context);
    console.log(logEntry);
  }

  // Debug level logging with environment-specific behavior
  public debug(message: string, context?: LogContext): void {
    // Check if debug logging is permitted
    if (!this.shouldLog(LogLevel.DEBUG)) return;

    // Create debug log entry
    const logEntry = this.createLogEntry(LogLevel.DEBUG, message, context);

    // Only log debug messages in non-production environments
    if (env.NODE_ENV !== 'production') {
      console.debug(logEntry);
    }
  }

  // Performance tracking method to measure operation durations
  public performance(operation: string, startTime: number): void {
    // Calculate operation duration
    const duration = Date.now() - startTime;

    // Log performance metrics with context
    this.info(`Performance: ${operation} took ${duration}ms`, { duration });
  }

  // Internal method to send errors to external monitoring service
  // Provides extensibility for error tracking integrations
  private sendErrorToMonitoring(
    message: string,
    error?: Error,
    context?: LogContext
  ): void {
    // Check for external error tracking mechanism
    // Placeholder for services like Sentry, LogRocket, etc.
    if (typeof window !== 'undefined' && window.errorTracker) {
      window.errorTracker.captureException(error || new Error(message), {
        extra: context,
      });
    }
  }
}

// Export pre-configured logger instance with environment-aware settings
export const logger = Logger.getInstance({
  // Adjust log level based on environment
  level: env.NODE_ENV === 'production' ? LogLevel.WARN : LogLevel.DEBUG,
  prefix: 'NextApp',
});

// Export Logger class for advanced configuration scenarios
export { Logger };
