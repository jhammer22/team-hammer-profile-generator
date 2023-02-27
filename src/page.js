// import employee class and subclass
const {Employee} = require('../lib/Employee');
const {Intern} = require('../lib/Intern');
const {Manager} = require('../lib/Manager');
const {Engineer} = require('../lib/Engineer');
// function to render employee case by case

// function to generate html

function renderEmployee(employee) {
  switch (employee.getRole()) {
    case "Manager":
      let manager = new Manager;
      manager.name = employee.name;
      return `
      <div class="card">
      <div class="card-header">
        <h2>Manager</h2>
      </div>
        <ul class = "list-group">
          <li class = "list-group-item">Name:</li>
          <li class = "list-group-item">ID: ${manager.getId()}</li>
          <li class = "list-group-item">Email: ${manager.getEmail()}</li>
          <li class = "list-group-item">LinkedIn: ${manager.getLinkedIn()}</li>
        </ul>
      </div>`
      break;

    case "Engineer":
      
  }
}