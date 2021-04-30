// A Developer Class
class Developer {
  constructor (name, type) {
    this.name = name
    this.type = 'Developer'
  }
}

// A class for Testers
class Tester {
  constructor (name, type) {
    this.name = name
    this.type = 'Tester'
  }
}

// A factory class
class EmployeeFactory {
  createEmployee (name, type) {
    if (type === 1) return new Developer(name)
    if (type === 2) return new Tester(name)
  }
}

const employeeFactory = new EmployeeFactory() // creating an instance of the EmployeeFactory class.
const employeeArray = []
employeeArray.push(employeeFactory.createEmployee('Ajai', 1))
employeeArray.push(employeeFactory.createEmployee('Amuden', 2))
employeeArray.push(employeeFactory.createEmployee('Aj', 1))
employeeArray.push(employeeFactory.createEmployee('SAP', 2))

// console.log(employeeArray)
employeeArray.forEach(x => {
  console.log(`Hi, I am ${x.name} and I work as a ${x.type}.`)
})
