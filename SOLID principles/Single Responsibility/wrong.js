class CalorieTracker {
  constructor (max) {
    this.caloriesConsumed = 0
    this.max = max
  }

  trackCalories (calories) {
    this.caloriesConsumed += calories
    console.log('logged successfully.')
    if (this.caloriesConsumed > this.max) {
      this.exceededAlert()
    }
  }

  exceededAlert () {
    console.log('You have exceeded your recommended limit.')
  }
}

const a = new CalorieTracker(2000)
a.trackCalories(1800)
a.trackCalories(300)

/*
The above approach is wrong. The reason is as follows:
1. trackCalories is meant to keep track only of the amount of calories consumed.
2. Logging/alerting is really not its purpose.
3. In this case, it seems a simple scenario, but if the logging functionality is
   replaced with a function that sends email to alert users, the complexity of this
   situation comes to light.
4. Say we are now indeed trying to replace the logger functionality with email functionality, the
   way we have designed our class will pose various difficulties.
5. An email sending functionality would be better off sitting in a separate class or module
   for itself rather than being coupled with the tracker class.
*/
