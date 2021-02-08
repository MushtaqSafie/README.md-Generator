// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#Description)
- [Table of Contents](#Table-of-Contents)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution Guidelines](#Contribution-Guidelines)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

${data.installation ? `## Installation
${data.installation}
` : ``}
${data.usage ? `## Usage
${data.usage}
` : ``}
${data.contribution ? `## Contribution Guidelines
${data.contribution}
` : ``}
${data.tests ? `## Tests
${data.tests}
` : ``}

## License
This application is covered under the ISC license.
For more information, [click here](https://opensource.org/licenses/ISC).

## Questions
**My GitHub Profile**: [MushtaqSafie](https://github.com/MushtaqSafie)

If you have any further questions, please email me at [mushtaq.safie@students.mq.edu.au](mushtaq.safie@students.mq.edu.au).
`;

}

module.exports = generateMarkdown;
