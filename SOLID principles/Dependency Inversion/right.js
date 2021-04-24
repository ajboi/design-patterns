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

class PaymentsProcessor {
  constructor (user) {
    this.user = user
    this.stripe = new Stripe(user)
    this.paypal = new PayPal()
  }

  pay (quantity, amountInDollars) {
    this.stripe.makePayments((amountInDollars * 100) * quantity) // Handling payments through Stripe.
    this.paypal.makePayments(this.user, amountInDollars * quantity) // Handling payments through PayPal.
  }
}
class Store {
  constructor (name, user) {
    this.name = name
    this.PaymentsProcessor = new PaymentsProcessor(user) // PayPal class has no constructor.
  }

  purchaseBike (quantity) {
    this.PaymentsProcessor.pay(2, 1000) // Handling payments through Paypal.
  }
}

const store1 = new Store('Saravana Stores', 'ajai')
store1.purchaseBike(2)

// In this example, we have an abstract Class PaymentProcessor that handles the differences in nuances between the
// different payment gateways thereby leaving Store, PayPal and Stripe classes loosely coupled. In an ideal world,
// an interface can also be used in place of the Abstract class.
