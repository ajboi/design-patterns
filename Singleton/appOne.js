import logger from './logger.js'

export default function logFirstImplementation () {
  logger.printLogCount()
  logger.logIt('First File')
  logger.printLogCount()
}

// Using logger functionality at two different modules.
