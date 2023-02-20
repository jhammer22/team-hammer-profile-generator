// Import all the things
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const Employee = require('./library/Employee');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');

// ask questions to create team to decide what employee questions are going to be asked
function runProgram(){
  console.log(`
  -----------------------------------------------------------------
  Answer the following question to build team Hammer
  -----------------------------------------------------------------
  `);
  function createTeam(){
    inquirer.prompt([
      {
      type: "list",
      choices: [ "Engineer", "Intern", "Manager", "Team Hammer complete!"],
      name: "addEmployee",
      Message: "Choose from the following list what kind of employee you would like to add to the team."
      }
    ]) .then(function (input) {
      switch (input.addEmployee) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        case "Manager":
          createManager();
          break;
        default:
          console.log(`
          ------------------------------------------------------------------
          Team Hammer Complete
          ------------------------------------------------------------------
          `)
          // fs.writeFileSync(./)//finish this once path is set up      
      }
    })
  }
  createTeam();
}
// create Engineer

// create Intern

// create Manager

// fs writeToFile