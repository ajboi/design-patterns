class Logger {
  constructor () {
    if (Logger.instance == null) { // Logger.instance is a static variable of this class. Value of Logger.instance will be null/undefined when it's not declared or initialised.
      this.logger = []
      Logger.instance = this
    }
    return Logger.instance
  }

  printLogCount () {
    console.log(`Total logged items = ${this.logger.length}`)
  }

  logIt (message) {
    this.logger.push(message)
    console.log(`Logged message: ${message}`)
  }

  static getLoggerInstance () {
    return new Logger() // Call the constructor when this function is called. The constructor shall decide if a new object
    // ought to be created or not.
  }
}

const logger = Logger.getLoggerInstance() // create an instance. (for the first time.)
Object.freeze(logger) // Prevents the application execution from modifying the state and methods of the object.
export default logger
