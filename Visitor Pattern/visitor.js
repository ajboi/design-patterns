// Defining the visitable class.
class Employee {
  constructor (name, salary) {
    this.name = name
    this.salary = salary
  }

  // Defining ordinary class methods.
  getSalary () {
    return this.salary
  }

  setSalary (salary) {
    this.salary = salary
  }

  // Defining the accept method.
  accept (visitor) {
    visitor.visit(this)
  }
}

// Defining a visitor class.
class Bonus {
  constructor (value) {
    this.value = value
  }

  // Define the visitor method.
  visit (employee) {
    employee.salary += this.value
  }
}

const emp1 = new Employee('Ajai', 20000)
const bonus = new Bonus(20000)

console.log(`Salary before bonus applied = ${emp1.getSalary()}`)

emp1.accept(bonus) // Passing the visitor object to execute the visitor method inside the accept method of the visitable class.

console.log(`Salary before bonus applied = ${emp1.getSalary()}`)
