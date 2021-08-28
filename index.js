
// Display page that has a software teams emails and github profiles

const fs = require('fs');
const inquirer = require('inquirer');

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


promptUser()
.then(function(managerAnswers) {
  return generateHTML(managerAnswers);
});