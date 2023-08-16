// External packages
const fs =  require('fs');
const inquirer = require('inquirer');
const util = require('util');

// Internal packages
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title? ',
        name: 'title',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log('A valid project title is required.')
            } else {
                return true;
            }
        }
    }, 
    {
        type: 'input',
        message: 'Include a table of contents',
        name: 'contents',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("A valid table of contents is required")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("A valid project description is required.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What are the steps for installation for your project?',
        name: 'installation',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("A valid installation is required.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'How will users use your project?',
        name: 'usage',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("A valid usage description is required.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Did anyone collaborate on this project?  If so, name them: ',
        name: 'collaborators',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("A valid collaborator is required (if no one helped, write 'None').")
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        message: 'Choose a license for your project. ',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Are there any tests included in your project? ',
        name: 'tests',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("A valid response is required (if no tests, write 'none').")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter your GitHub username. ',
        name: 'username',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("Enter your GitHub username.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter your email. ',
        name: 'email',
        validate: function(answer) {
            if(answer.length < 1) {
                return console.log("Enter your email.")
            } else {
                return true;
            }
        }
    }
];


inquirer.prompt(questions).then((data) => {
    const readmeContent = generateMarkdown(data);


    fs.writeFile('README.md', readmeContent, (err) => {
        if(err) {
            console.log('Error writing README.md', err)
        } else {
            console.log('Success writing README.md!')
        }
    })
});
// Write node index.js to start the app

