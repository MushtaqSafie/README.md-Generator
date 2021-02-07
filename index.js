// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => inquirer.prompt(questions);

// Project Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// Project Title sample promt
// -----
// also promt if want to have the following sections
// Description, installation instructions, usage information, contribution quidelines, and test instructions (section notepad multilines text)
// -----
// Multiple choose, list of options (choosea license)
// badge for that license is add near tothe top of the the readme file,  and added section on bottom as well
// ---
// promt Github username
// promot email address

// ---
// table of content automaticly created with links.

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

const generateMarkDown = (ans) =>
`# ${ans.title}
${ans.description}

## ${ans.toBeDelivered}

${ans.lastname}
${ans.bio}
${JSON.stringify(ans, null, '  ')}`;

// TODO: Create a function to initialize app
function init() {
  promptUser().then(answers => {
    const mdFile = generateMarkDown(answers);
    fs.writeFileSync('README.md', mdFile)
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


