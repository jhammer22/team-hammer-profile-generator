// sub class constructor of employee
// import employee
const Employee = require('./Employee')
// give sub class unique constructor of twitter
class Engineer extends Employee {
  constructor(id, name, position, email, twitter){
    super(id, name, position, email);
    this.twitter = twitter;
  }
  getTwitter(){
    return this.twitter;
  }
}


// export
module.exports = Engineer