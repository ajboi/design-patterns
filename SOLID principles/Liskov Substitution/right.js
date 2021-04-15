class FlyingBird {
  fly () {
    console.log('I can fly.')
  }
}

class SwimmingBird {
  swim () {
    console.log('I can swim.')
  }
}

class Crow extends FlyingBird {
  quack () {
    console.log('quack')
  }

  swim () {
    throw new Error('I cannot swim.') // Overriding the parent swim method.
  }
}

class Penguin extends SwimmingBird {
  swim () {
    console.log('I can swim.')
  }

  fly () {
    throw new Error('I cannot fly.') // Overriding the parent fly method.
  }
}

function makeFlyingBirdFly (bird) {
  bird.fly()
}

function makeSwimmingBirdSwim (bird) {
  bird.swim()
}

const Crow1 = new Crow()
const Penguin1 = new Penguin()

makeFlyingBirdFly(Crow1)
makeSwimmingBirdSwim(Penguin1)

/*
  This approach satisfies the Liskov Substitution principle.

  The object Penguin1 works fine in all places where SwimmmingBird class will work.
  The object Crow1 works fine in all places where FlyingBird class will work.
  However, for birds such as Ducks which can both swim and fly, does not fit into these classes.
  It might require another separate class. As it is not possible in JS to inherit a new class from more than 1 class.
  This problem is not because of the Liskov principle, but rather it's due to our approach of inheritance, and has nothing to do with Liskov principle.

  */
