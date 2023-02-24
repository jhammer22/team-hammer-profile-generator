// Import all the things
const inquirer = require('inquirer');
const Employee = require('./library/Employee');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
















// runProgram();
// const team = []
// // ask questions to decide what employee questions are going to be asked
// function runProgram(){
//   console.log(`
//   -----------------------------------------------------------------
//   Answer the following question to build team Hammer
//   -----------------------------------------------------------------
//   `);
//   createTeam();
//   function createTeam(){
//     inquirer.prompt([
//       {
//       type: "list",
//       choices: [ "Engineer", "Intern", "Manager", "Team Hammer complete!"],
//       name: "addEmployee",
//       message: "Choose from the following list what kind of employee you would like to add to the team."
//       }
//       // ask questions to asign employee information
//     ]) .then(function (input) {
//         switch (input.addEmployee) {
//           case "Engineer":
//             function createEngineer() {
//               inquirer.prompt([
//                 {
//                   type: 'input',
//                   message: 'What is your the name of this employee',
//                   name: 'engineerName',
//                   validate: (answer) => {
//                     if (answer !== '') {
//                       return true;
//                     }
//                     return 'Is your employee nameless? Please enter a name to continue.'
//                   },
//                 },
//                 {
//                   type: 'input',
//                   message: 'Enter employee number ID',
//                   name: 'engineerId',
//                   validate: (answer) => {
//                    if (answer!== '') {
//                     return true;
//                   }
//                   return 'Please enter a number to continue.'
//                 },
//                 },
//                 {
//                   type: 'input',
//                   name: 'engineerEmail',
//                   message: 'What is your email?',
//                   validate: (answer) => {
//                      if (answer!== '') {
//                       return true;
//                      }
//                      return 'Please enter a valid email address to continue.'
//                     },
//                 },
//                 {
//                   type: 'input',
//                   name: 'engineerTwitter',
//                   message: 'Enter your twitter handle',
//                   validate: (answer) => {
//                     if (answer!== '') {
//                       return true;
//                     }
//                     return 'Please enter a valid twitter handle to continue.'
//                   },
//                 }
//               ]).then(answers => {
//                 const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerTwitter);
//               })
//             }; 
//           case "Intern":
//             function createIntern() {
//               inquirer.prompt([
//                 {
//                   type: 'input',
//                   message: 'What is your the name of this employee',
//                   name: 'internName',
//                   validate: (answer) => {
//                     if (answer !== '') {
//                       return true;
//                     }
//                     return 'Come on the employee has to have a name! Please enter a name to continue.'
//                   },
//                 },
//                 {
//                   type: 'input',
//                   message: 'Enter employee number ID',
//                   name: 'internId',
//                   validate: (answer) => {
//                    if (answer!== '') {
//                     return true;
//                    }
//                    return 'Please enter a number to continue.'
//                   }
//                 },
//                 {
//                   type: 'input',
//                   name: 'internEmail',
//                   message: 'What is your email?',
//                   validate: (answer) => {
//                       if (answer!== '') {
//                         return true;
//                       }
//                       return 'Please enter a valid email address to continue.'
//                     },
//                 },
//                 {
//                   type: 'input',
//                   name: 'internSchool',
//                   message: 'What school did you attend?',
//                   validate: (answer) => {
//                     if (answer!== '') {
//                       return true;
//                     }
//                     return 'Please enter a valid school to continue.'
//                 }
//                 }
//               ]) .then (answers => {
//                 const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
//               }) 

//             }
//            break;
//           case "Manager":
//             function createManager() {
//               inquirer.prompt([
//                 {
//                   type: 'input',
//                   message: 'What is your the name of this employee',
//                   name: 'managerName',
//                   validate: (answer) => {
//                     if (answer !== '') {
//                       return true;
//                     }
//                     return 'How did you get into management with no name? Please enter a name to continue.'
//                   },
//                 },
//                 {
//                   type: 'input',
//                   message: 'Enter employee number ID',
//                   name: 'managerId',
//                   validate: (answer) => {
//                     if (answer!== '') {
//                       return true;
//                     }
//                     return 'Please enter a number to continue.'
//                   }
//                 },
//                 {
//                   type: 'input',
//                   name: 'managerEmail',
//                   message: 'What is your email?',
//                   validate: (answer) => {
//                      if (answer!== '') {
//                       return true;
//                      }
//                      return 'Please enter a valid email address to continue.'
//                     },
//                 },
//                 {
//                   type: 'input',
//                   name: 'managerLinkedIn',
//                   message: 'Link your LinkedIn',
//                   validate: (answer) => {
//                     if (answer!== '') {
//                       return true;
//                     }
//                     return 'Please enter a valid LinkedIn to continue.'
//                   },
//                 }
//               ])
//             };
//             break;
//           default:
//             console.log(`
//           ------------------------------------------------------------------
//             Team Hammer Complete
//           ------------------------------------------------------------------
//           `)     
//       }
//     })
//   };
  
// };
// runProgram();

// function createEngineer() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: 'What is your the name of this employee',
//       name: 'engineerName',
//       validate: (answer) => {
//         if (answer !== '') {
//           return true;
//         }
//         return 'Is your employee namless? Please enter a name to continue.'
//       },
//     },
//     {
//       type: 'input',
//       message: 'Enter employee number ID',
//       name: 'engineerId',
//       validate: (answer) => {
//        if (answer!== '') {
//         return true;
//       }
//       return 'Please enter a number to continue.'
//     },
//     },
//     {
//       type: 'input',
//       name: 'engineerEmail',
//       message: 'What is your email?',
//       validate: (answer) => {
//          if (answer!== '') {
//           return true;
//          }
//          return 'Please enter a valid email address to continue.'
//         },
//     },
//     {
//       type: 'input',
//       name: 'engineerTwitter',
//       message: 'Enter your twitter handle',
//       validate: (answer) => {
//         if (answer!== '') {
//           return true;
//         }
//         return 'Please enter a valid twitter handle to continue.'
//       },
//     }
//   ]).then(answers => {
//     const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerTwitter);
//   })
// }; 


// create Intern

// create Manager
// function createManager() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: 'What is your the name of this employee',
//       name: 'managerName',
//       validate: (answer) => {
//         if (answer !== '') {
//           return true;
//         }
//         return 'How did you get into management with no name? Please enter a name to continue.'
//       },
//     },
//     {
//       type: 'input',
//       message: 'Enter employee number ID',
//       name: 'managerId',
//       validate: (answer) => {
//         if (answer!== '') {
//           return true;
//         }
//         return 'Please enter a number to continue.'
//       }
//     },
//     {
//       type: 'input',
//       name: 'managerEmail',
//       message: 'What is your email?',
//       validate: (answer) => {
//          if (answer!== '') {
//           return true;
//          }
//          return 'Please enter a valid email address to continue.'
//         },
//     },
//     {
//       type: 'input',
//       name: 'managerLinkedIn',
//       message: 'Link your LinkedIn',
//       validate: (answer) => {
//         if (answer!== '') {
//           return true;
//         }
//         return 'Please enter a valid LinkedIn to continue.'
//       },
//     }
//   ])
// };