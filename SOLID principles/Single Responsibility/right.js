import Logger from './right_dependency.js'

class CalorieTracker {
  constructor (max) {
    this.caloriesConsumed = 0
    this.max = max
  }

  trackCalories (calories) {
    this.caloriesConsumed += calories
    console.log('logged successfully.')
    if (this.caloriesConsumed > this.max) {
      Logger('limit exceeded.')
    }
  }
}

const a = new CalorieTracker(2000)
a.trackCalories(1800)
a.trackCalories(300)

/*
In this approach, the logger/email sender functionality will be sitting in its own module.
The only reason we will now modify our class is when we are changing the way we are keeping
track of calories. Thus, Single Responsibility Function is now satisfied.
*/
