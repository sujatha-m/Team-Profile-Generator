// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email, role="Employee") {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
  
    getName(){    
           return this.name.split(" ").map(function(word){
            return word.charAt(0).toUpperCase()+word.slice(1)
         }).join(" ")
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
  }
  module.exports = Employee;

//   const employee = new Employee("Sujatha",1,"jhanavi.bhushan@gmail.com","Engineer")
//   console.log(employee.getName());
//   console.log(employee.getId());
//   console.log(employee.getEmail());
//   console.log(employee.getRole())
  