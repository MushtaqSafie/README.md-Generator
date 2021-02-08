// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => inquirer.prompt([
  {
  type: 'input',
  name: 'title',
  message: 'Enter your project title.',
  },
  {
  type: 'input',
  name: 'description',
  message: 'Enter your project description.',
  },
  {
    type: 'confirm',
    name: 'includeInstallation',
    message: 'Would you like to add installation guideline?',
    default: false,
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation guideline',
    when: function(answer) {
      return answer.includeInstallation;
    },
  },
  {
    type: 'confirm',
    name: 'includeUsage',
    message: 'Would you like to add the application usage?',
    default: false,
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the application usage',
    when: function(answer) {
      return answer.includeUsage;
    },
  },
  {
    type: 'confirm',
    name: 'includeContribution',
    message: 'Would you like to add contribution guidelines?',
    default: false,
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter the contribution guidelines',
    when: function(answer) {
      return answer.includeContribution;
    },
  },
  {
    type: 'confirm',
    name: 'includeTests',
    message: 'Would you like to add the application tests instruction?',
    default: false,
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the application tests instruction',
    when: function(answer) {
      return answer.includeTests;
    },
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'Enter your GitHub profile <UserName>',
  },
  {
    type: 'input',
    name: 'contactEmail',
    message: 'Enter your contact email address',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select your license type?',
    choices: [
      'Apache License 2.0',
      'GNU General Public License v3',
      'MIT License',
      'BSD 2-Clause',
      'BSD 3-Clause',
      'Boost Software 1.0',
      'CreativeCommons Zero v1.0 Universal',
      'Eclipse Public 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v3.0',
      'Mozilla Public License 2.0',
      'The Unlicense',
    ],
  },
]);



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


