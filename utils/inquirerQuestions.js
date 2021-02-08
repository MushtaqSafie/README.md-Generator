const inquirer = require('inquirer');

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
    name: 'Usage',
    message: 'Enter the application usage',
    when: function(answer) {
      return answer.includeUsage;
    },
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
]);

module.exports = promptUser;