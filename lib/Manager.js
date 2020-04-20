/// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

//constructor Function for Manager profie
class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super(name, id, email, "Manager") // calls the constructor method on the Employee class
    this.officeNumber = officeNumber  
  }
 
  getOfficeNumber(){
      return this.officeNumber;
  }
}
  
//export github info extraction as a module
module.exports = Manager;

// const manager = new Manager("Shashi",2 , "shashi.vj@gmail.com" , 5);
// console.log(manager.getName());
// console.log(manager.getId());
// console.log(manager.getEmail());
// console.log(manager.getRole());
// console.log(manager.getOfficeNumber());
