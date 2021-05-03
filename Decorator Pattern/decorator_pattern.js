// Implement Concrete classes
class MargheritaPizza {
  constructor () {
    this.description = 'Margherita Pizza'
    this.cost = 100
  }

  getCost () {
    return this.cost
  }

  getDesc () {
    return this.description
  }
}

// Implement Concrete classes
class PanneerPizza {
  constructor () {
    this.description = 'Panneer Pizza'
    this.cost = 150
  }

  getCost () {
    return this.cost
  }

  getDesc () {
    return this.description
  }
}

// Implement Concrete classes
class FarmHousePizza {
  constructor () {
    this.description = 'Farmhouse Pizza'
    this.cost = 200
  }

  getCost () {
    return this.cost
  }

  getDesc () {
    return this.description
  }
}

// Implement Decorator Classes
class PineappleTopping {
  constructor (pizza) {
    this.pizza = pizza
    this.cost = 10
  }

  getCost () {
    return this.cost + this.pizza.getCost()
  }

  getDesc () {
    return `Pineapple, ${this.pizza.getDesc()}`
  }
}

// Implement Decorator Classes
class CheeseTopping {
  constructor (pizza) {
    this.pizza = pizza
    this.cost = 15
  }

  getCost () {
    return this.cost + this.pizza.getCost()
  }

  getDesc () {
    return `Cheese, ${this.pizza.getDesc()}`
  }
}

// Implement Decorator Classes
class JalapenoTopping {
  constructor (pizza) {
    this.pizza = pizza
    this.cost = 5
  }

  getCost () {
    return this.cost + this.pizza.getCost()
  }

  getDesc () {
    return `Jalapeno, ${this.pizza.getDesc()}`
  }
}

let order1 = new MargheritaPizza()
order1 = new JalapenoTopping(order1) // Reassigning the same variable since it's basically the same pizza.
console.log(`${order1.getDesc()} costs ${order1.getCost()}.`) // logs 100 + 05 = 105.

let order2 = new FarmHousePizza()
order2 = new PineappleTopping(order2) // Reassigning the same variable since it's basically the same pizza.
order2 = new CheeseTopping(order2) // Reassigning the same variable since it's basically the same pizza.
console.log(`${order2.getDesc()} costs ${order2.getCost()}.`) // logs 200 + 10 + 15 = 225.
