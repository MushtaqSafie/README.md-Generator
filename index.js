// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptUser = () => inquirer.prompt(questions);

const questions = [
  {
  type: 'input',
  name: 'title',
  message: 'Enter the project title?',
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Write a short description of the project at least 3 lines.',
    validate: function (text) {
      if (text.split('\n').length < 1) {
        return 'Must be at least 2 lines.';
      }

      return true;
    },
  },
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'list',
    name: 'license',
    message: 'What size do you need?',
    choices: ['ISC', 'MIT', 'Academic Free License v3.0', 'GNU'],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
  promptUser().then(answers => {
    const mdFile = generateMarkdown(answers);
    fs.writeFileSync('newREADME.md', mdFile)
    console.log('Successfully README.md is created');
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log('Prompt couldnt be rendered in the current environment');
    } else {
      console.log(error);
    }
  });
};

// Function call to initialize app
init();


