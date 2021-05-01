import logger from './logger.js'

export default function logSecondImplementation () {
  logger.printLogCount()
  logger.logIt('Second File')
  logger.printLogCount()
}

// Using logger functionality at two different modules.
