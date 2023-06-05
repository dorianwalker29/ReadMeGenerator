// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your application?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of the application.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the instructions for using your application?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines for your application?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions for your application?',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  const readmeTemplate = generateMarkdown(data);
  fs.writeFile(fileName, readmeTemplate, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file has been generated!');
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
