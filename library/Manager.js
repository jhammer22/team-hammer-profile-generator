// sub class constructor of employee
// import employee
const Employee = require('./Employee')
// give sub class unique constructor of LinkedIn
class Manager extends Employee {
  constructor(id, name, position, email, linkedin){
    super(id, name, position, email);
    this.linkedin = linkedin;
  }
  getTwitter(){
    return this.linkedin;
  }
}




// export
module.exports = Manager