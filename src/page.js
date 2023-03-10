// import employee class and subclass

const Employee = require('../library/Employee');
const Intern = require('../library/Intern');
const Manager = require('../library/Manager');
const Engineer = require('../library/Engineer');
// function to render employee case by case



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
// function to generate html
function generateHTML(employees) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1>
  <link rel = "stylesheet" href = "../distribution/style.css">
  <title>Getting Hammered in the employee genny</title>
  </head>
  <body>
  <header>
    <h1>Welcome to Team Hammer</h1>
    <p>Here we make getting hammered fun</p>
  </header>
  <main>
    <div class="card">
    
      ${employees.map(employee => renderEmployee(employee)).join("")}

    </div>
  </main>
  
  </body>`
}

module.exports = generateHTML;