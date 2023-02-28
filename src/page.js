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
          <li class = "list-group-item">Name: ${manager.getName()}</li>
          <li class = "list-group-item">ID: ${manager.getId()}</li>
          <li class = "list-group-item">Email: ${manager.getEmail()}</li>
          <li class = "list-group-item">LinkedIn: ${manager.getLinkedIn()}</li>
        </ul>
      </div>`
      break;

    case "Engineer":
      let engineer = new Engineer;
      engineer.name = employee.name;
      return `
      <div class="card">
      <div class="card-header">
        <h2>Engineer</h2>
      </div>
      <ul class = "list-group">
        <li class = "list-group-item">Name: ${enineer.getName()}</li>
        <li class = "list-group-item">ID: ${engineer.getId()}</li>
        <li class = "list-group-item">Email: ${engineer.getEmail()}</li>
        <li class = "list-group-item">Github: ${engineer.getGithub()}</li>
      </ul>
    </div>`
    break;

    case "Intern":
      let intern = new Intern;
      intern.name = employee.name;
      return `
      <div class="card">
      <div class="card-header">
        <h2>Intern</h2>
      </div>
      <ul class = "list-group">
        <li class = "list-group-item">Name: ${intern.getName()}</li>
        <li class = "list-group-item">ID: ${intern.getId()}</li>
        <li class = "list-group-item">Email: ${intern.getEmail()}</li>
        <li class = "list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>`
  }
}