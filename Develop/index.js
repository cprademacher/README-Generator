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
                return console.log("A valid project description is required.")
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
                return console.log("A valid project description is required.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Did anyone collaborate on this project?  If so, name them: ',
        name: 'collaborators',
    },
    {
        type: 'list',
        message: 'Choose a license for your project. ',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
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

// Everything is working except when I 'preview' the readme file it only shows
// me an object of the data