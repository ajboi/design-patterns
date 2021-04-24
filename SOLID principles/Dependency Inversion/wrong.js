// Assume you have a store class, a stripe class and a paypal class.

class Stripe {
  constructor (user) {
    this.user = user
  }

  makePayments (amountInCents) { // Stripe API implemented here accepts only values in Cents.
    console.log(`${this.user} has been charged ${amountInCents / 100} for his purchase through the Stripe Payment Gateway.`)
  }
}

class PayPal {
  makePayments (user, amountInDollars) { // PayPal class has no attributes. It takes user name in the makePayments method itself.
    // Also, it accepts amounts in dollars.
    console.log(`${user} has been charged ${amountInDollars} for his purchase through the PayPal Payment Gateway.`)
  }
}

class Store {
  constructor (name, user) {
    this.name = name
    this.stripe = new Stripe(user) // stripe class has a user attribute created in its constructor function.
    this.paypal = new PayPal() // PayPal class has no constructor.
    this.user = user // To pass username while making payments using PayPal
  }

  purchaseBike (quantity) {
    this.stripe.makePayments((1000 * 100) * quantity) // Handling payments through Stripe.
    this.paypal.makePayments(this.user, 1000 * quantity) // Handling payments through Paypal.
  }
}

const store1 = new Store('Saravana Stores', 'ajai')
store1.purchaseBike(2)

// In this class, it can be seen that we are handling both paypal and stripe. But such implementation is
// not advisable as if we add another payment method in the future or modify one of the existing, we'll have
// to make changes at various places which is going to be a nightmare. For addressing this, we need an
// intermediate wrapper module so that we do not have to alter our Store class in times of change.
