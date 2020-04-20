// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')

//constructor function for Engineer profile
class Engineer extends Employee {
  constructor (name, id, email, github) {
    super(name, id, email, "Engineer") // calls the constructor method on the Employee class
    this.github = github;
 }
 
  getGithub(){
      return this.github;
  }
}
  
//export github info extraction as a module
module.exports = Engineer;

// const engineer = new Engineer ("Sujatha", 3 , "sujatha.email.com", "sujatha-m");

// console.log(engineer.getName());
// console.log(engineer.getId());
// console.log(engineer.getEmail());
// console.log(engineer.getRole());
// console.log(engineer.getGithub());