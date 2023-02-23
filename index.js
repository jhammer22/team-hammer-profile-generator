// Import all the things
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const Employee = require('../library/Employee');
const Engineer = require('../library/Engineer');
const Intern = require('../library/Intern');
const Manager = require('../library/Manager');

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
      message: "Choose from the following list what kind of employee you would like to add to the team."
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
        const dwight = answer.match(/\S+@\S+\.\S+/);
        if (dwight) {
          return true;
        }
        return 'Please enter words with letters you should know better.';
      },
    }
  ])
}; 
//.then for answers this will also fulfill position arg

// create Intern
function createIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your the name of this employee',
      name: 'internName',
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Come on the employee has to have a name! Please enter a name to continue.'
      },
    },
    {
      type: 'input',
      message: 'Enter employee number ID',
      name: 'internId',
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
      name: 'internEmail',
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
      name: 'internSchool',
      message: 'What school did you attend?',
      validate: (answer) => {
        const dwight = answer.match(/\S+@\S+\.\S+/);
        if (dwight) {
          return true;
        }
        return 'They did teach you words in school right?';
      },
    }
  ])
}; //.then for answers this will also fulfill position arg
// create Manager
function createManager() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your the name of this employee',
      name: 'managerName',
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'How did you get into management with no name? Please enter a name to continue.'
      },
    },
    {
      type: 'input',
      message: 'Enter employee number ID',
      name: 'managerId',
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
      name: 'managerEmail',
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
      name: 'managerLinkedIn',
      message: 'Link your LinkedIn',
      validate: (answer) => {
        const dwight = answer.match(/\S+@\S+\.\S+/);
        if (dwight) {
          return true;
        }
        return 'We wont bite give us your LinkedIn';
      },
    }
  ])
}; //.then for answers this will also fulfill position arg
  // fs.writeFile(./)//finish this once path is set up 

