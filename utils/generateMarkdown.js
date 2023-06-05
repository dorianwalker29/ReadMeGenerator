// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache-2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU GPLv3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    
    return '';
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return '[MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache-2.0') {
      return '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU GPLv3') {
      return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    }
    
    return '';
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'MIT') {
      return 'This project is licensed under the MIT license.';
    } else if (license === 'Apache-2.0') {
      return 'This project is licensed under the Apache-2.0 license.';
    } else if (license === 'GNU GPLv3') {
      return 'This project is licensed under the GNU GPLv3 license.';
    }
    
    return '';
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
    
    ${licenseBadge}
   
    ${data.description}
  
    ${licenseSection}
  `;
  }
  
  module.exports = generateMarkdown;
  