// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'BSD 2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Boost Software 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'CreativeCommons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Eclipse Public 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'GNU Lesser General Public License v3.0':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      return '';
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU General Public License v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'BSD 2-Clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Boost Software 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'CreativeCommons Zero v1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Eclipse Public 2.0':
      return 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'GNU Affero General Public License v3.0':
      return 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU General Public License v2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'GNU Lesser General Public License v3.0':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;
    default:
      return '';
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#Description)
${data.includeInstallation ? `- [Installation](#Installation)` : ``}
${data.includeUsage ? `- [Usage](#Usage)` : ``}
${data.includeContribution ? `- [Contribution Guidelines](#Contribution-Guidelines)` : ``}
${data.includeTests ? `- [Tests](#Tests)` : ``}
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
This application is covered under the ${data.license}.
For more information, [click here](${renderLicenseLink(data.license)}).

## Questions
**My GitHub Profile**: [${data.gitHub}](https://github.com/${data.gitHub})

If you have any further questions, please email me at [${data.contactEmail}](mailto:${data.contactEmail}).
`;

}

module.exports = generateMarkdown;
