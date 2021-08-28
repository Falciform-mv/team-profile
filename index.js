
// Display page that has a software teams emails and github profiles

const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');

// variable that holds array of questions for inquirer
const questions = [
  {
    type: 'input',
    name: 'manager',
    message: 'Who is your team manager?'
  }
]

const promptUser = () => {
  return inquirer
  .prompt(questions)
}

const writeToFile = function(fileName, response) {
  fs.writeFile(fileName, response, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("success");
  })
} 



promptUser()
.then(function(managerAnswers) {
  return generateHTML(managerAnswers);
})
.then(function(pageHTML) {
  return writeToFile('index.html', pageHTML);
})
// .then(pageHTML => {
//   return writeFile(pageHTML);
// });