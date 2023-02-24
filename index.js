// Import all the things
const inquirer = require('inquirer');
const Employee = require('./library/Employee');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');
// const fs = require('fs');
// const generateHTML = require('./src/generateHTML');


// all employee types share general questions create reusable arrays of general questions
const generalQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your employee ID?',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter your employee ID!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  }
];

// const questions created now build prompt to ask user what kind of employee they want to add and questtions to create team member
const newEmployee = () => {
  console.log(`
  -----------------------------------------------------------------
  Answer the following question to build team Hammer
  -----------------------------------------------------------------
  `);
  inquirer.prompt([
    {
      type: 'list',
      message: 'What kind of employee would you like to add?',
      name: 'employeeType',
      choices: ['Engineer', 'Intern', 'Manager'],
    }
  ])
  .then((userInput) => {
    switch (userInput.employeeType) {
      case 'Engineer':
        inquirer.prompt([
          ...generalQuestions,
          {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
              if (githubInput) {
                return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
          }
          }
        ]) .then((data) => {
          let employee = new Engineer(data.name, data.id, data.email, data.github);
          // team.push(employee);
          addMoreEmployees();
        })
        break;
    
      case 'Intern':
        inquirer.prompt([
          ...generalQuestions,
          {
            type: 'input',
            name:'school',
            message: 'What school did you attend?',
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log('Please enter your school!');
                return false;
              }
            }
          }
        ]).then((data) => {
          let employee = new Intern(data.name, data.id, data.email, data.school);
          // team.push(employee);
          addMoreEmployees();
        })
        break;

      case 'Manager':
        inquirer.prompt([
          ...generalQuestions,
          {
            type: 'input',
            name: 'LinkedIn',
            message: 'What is your LinkedIn username?',
            validate: LinkedInInput => {
              if (LinkedInInput) {
                return true;
              }else {
                console.log('Please enter your LinkedIn username!');
                return false;
              }
            }
          }
        ]).then ((data) => {
          let employee = new Manager(data.name, data.id, data.email, data.LinkedIn);
          // team.push(employee);
          addMoreEmployees();
        })
        break;
  }
})
}

// add more employee types function
const addMoreEmployees = () => {
  inquirer.prompt ([
    {
      type: 'confirm',
    message: 'Would you like to add another employee?',
    name: 'addEmployee',
    default: false,
    },
  ]).then((answeredYes) => {
    if (answeredYes.addEmployee === true) {
      newEmployee();
    } else {
      console.log('Team created!');
      console.log(team);
      writeToFile('./dist/index.html', generateHTML(team));
    }
  })
};

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Success!');
//     }
//   });
// };

// initialize function
 init = () => { newEmployee()};

// call init function
init();