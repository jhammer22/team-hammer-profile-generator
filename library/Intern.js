// sub class constructor of employee
// import employee
const Employee = require('./Employee')
// give sub class unique constructor of school

class Intern extends Employee {
  constructor(id, name, position, email, school){
    super(id, name, position, email);
    this.school = school;
  }
  getTwitter(){
    return this.school;
  }
}




// export
module.exports = Intern