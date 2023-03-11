// main class constructor
// sub class's will all share id, name, position, email


class Employee {
  constructor(id, name, position, email){
    this.id = id;
    this.name = name;
    this.position = position;
    this.email = email;
  }

  getId() {
    return this.id;
  }
  getName(){
    return this.name;
  }
  getPosition() {
    return this.position
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.employee
  }


};
 
module.exports = Employee;