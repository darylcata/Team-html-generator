const Manager = require("./starter/lib/Manager");
const Engineer = require("./starter/lib/Engineer");
const Intern = require("./starter/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//initial code provided by Dan(instructor) during office hours
inquirer.prompt([
    //MANAGER questions
    {
        type: 'input',
        name: 'name',
        message: 'What is your Team Manager\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    },
]).then(response => {
    // populate manager info
    console.log(response);
    promptForNextEmployee();
});

//inquirer function that promts to select the type of employee
const promptForNextEmployee = () => {
    inquirer.prompt([{
        type: 'list',
        message: 'What type of employee do you want to add?',
        name: 'addEmployee',
        choices: ['Engineer', 'Intern', 'No more employees to add'],
    }]).then(response => {
        // if engineer
        if (response.addEmployee === "Engineer") {
            promptForEngineer();
        } else if (response.addEmployee=== "Intern") {// else if intern
            promptForIntern();
        } else {
            //    use the functionality from page-template to generate the team
            buildPage();
        };
    })
};

const promptForEngineer = () => {
    inquirer.prompt([
        //ENGINEER questions
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
    ]).then(response => {
        // add new engineer to employees array
        console.log("---Engineer's details---")
        console.log(response);
        promptForNextEmployee();
    })
};

const promptForIntern = () => {
    //intern questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school that you attended?',
        }]).then(response => {
            // add new intern to employees array
            console.log("---Intern's details---")
            console.log(response);
            promptForNextEmployee();
        })
};

const buildPage = () => {
    console.log("build page")
};