// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

//constructor function for Intern profile
class Intern extends Employee {
  constructor (name, id, email, school) {
    super(name, id, email, "Intern") // calls the constructor method on the Employee class
    this.school = school;
 }
 
  getSchool(){
      return this.school.split(" ").map(function(word){
        return word.charAt(0).toUpperCase()+word.slice(1)
      }).join(" ")
  }
}
  
//export github info extraction as a module
module.exports = Intern;

// const intern = new Intern("Vrishank",6 , "vrishank@gmail.com", "Roland Michener")

// console.log(intern.getName());
// console.log(intern.getId());
// console.log(intern.getEmail());
// console.log(intern.getRole());
// console.log(intern.getSchool());
// return this.name.split(" ").map(function(word){
//   return word.charAt(0).toUpperCase()+word.slice(1)
// }).join(" ")