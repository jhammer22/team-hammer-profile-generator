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
      }
    })
  };
  createTeam();
};
// create Engineer \
// validate responses
// do this for all employee types
function createEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your the name of this employee',
      name: 'engineerName',
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Is your employee namless? Please enter a name to continue.'
      },
    },
    {
      type: 'input',
      message: 'Enter employee number ID',
      name: 'engineerId',
      validate: (answer) => {
        const pam = answer.match(/^[1-9]\d*$/);
        if(pam) {
          return true;
        }
        return 'Please enter a number greater than zero!'
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is your email?',
      validate: (answer) => {
          const jim = answer.match(/\S+@\S+\.\S+/);
          if (jim) {
            return true;
          }
          return 'Please enter words with letters you should know better.';
        },
    },
    {
      type: 'input',
      name: 'engineerTwitter',
      message: 'Enter your twitter handle',
      validate: (answer) => {
        const jim = answer.match(/\S+@\S+\.\S+/);
        if (jim) {
          return true;
        }
        return 'Please enter words with letters you should know better.';
      },
    }
  ])
}; //.then for answers this will also fulfill position arg

// create Intern

// create Manager

  // fs.writeFile(./)//finish this once path is set up 

