class Add { // Strategy that does addition
  doOperation (a, b) {
    return a + b
  }
}

class Subtract { // Strategy that does subtraction.
  doOperation (a, b) {
    return a - b
  }
}

class Multiply { // Strategy that does multiplication.
  doOperation (a, b) {
    return a * b
  }
}

class Context { // Context where the strategy is set and its implementation is done.
  constructor (strategy) {
    this._strategy = strategy
  }

  executeStrategy (a, b) {
    return this._strategy.doOperation(a, b)
  }
}

const X = new Context(new Multiply()) // Create a context instance with strategy as multiplication.
console.log(X.executeStrategy(2, 3)) // Execute the strategy with values passed as parameters.
