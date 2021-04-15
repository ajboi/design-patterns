class Bird {
  fly () {
    console.log('I can fly.')
  }
}

class Duck extends Bird {
  quack () {
    console.log('quack')
  }
}

class Penguin extends Bird {
  swim () {
    console.log('I can swim.')
  }

  fly () {
    throw new Error('I cannot fly.') // Overriding the parent fly method as penguins cannot fly.
  }
}

function makeBirdFly (bird) {
  bird.fly()
}

const Duck1 = new Duck()
const Penguin1 = new Penguin()

makeBirdFly(Duck1)
makeBirdFly(Penguin1)

/*
This approach does not satisfy the Liskov Substitution principle.
According to the principle, the subclass object should work fine in
all places were parent class objects are used.
Here, when Fly() is called upon Penguin1, it throws an error.
*/
