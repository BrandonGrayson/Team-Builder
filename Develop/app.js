const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// an array to store the new team members once they're created
const newTeam = []

// use inquirer to prompt user
// generate an array of questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is Your Managers Name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is your managers id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your managers emial?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your managers office number?'
    },
    {
        // what kind of employee would you like to add
        type: 'list',
        name: 'teamMember',
        message: 'Which Type of team member would you like to add?',
        choices: [
           'Engineer',
            'Intern',
            'I am done adding team members'
        ]
    }
]
inquirer.prompt(questions).then(answers => {
    console.log(answers)
    // create a new Empolyee
    let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    // pass new employee to the newTeam
    newTeam.push(newManager)    
    if (answers.teamMember === 'Engineer') {
        console.log('theyd like to add an Engineer')
        newEngineer()
    } else if 
        (answers.teamMember === 'Intern') {
        newIntern()
    } else {
        console.log('They dont want to add anymore Members!')
        render(newTeam)
    }
})
// based on what type of user they are

// create a function for engineer questions 
function newEngineer () {
    console.log('this user would like to add an engineer!')
    //const questions2 = 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your engineers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your engineers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your engineers github username?'
        },
        {
            // what kind of employee would you like to add
            type: 'list',
            name: 'teamMember',
            message: 'Which Type of team member would you like to add?',
            choices: [
               'Engineer',
                'Intern',
                'I am done adding team members'
            ]
        }
    ]).then(answers => {
        console.log(answers)
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github, answers.teamMember)
        newTeam.push(newEngineer)
        if (answers.teamMember === 'Engineer') {
            console.log('theyd like to add an Engineer')
            newEngineer()
        } else if 
            (answers.teamMember === 'Intern') {
            newIntern()
        } else {
            console.log('They dont want to add anymore Members!')
            render(newTeam)
        }
    })
}

// and intern questions
function newIntern () {
    console.log('this user would like to add an Intern!')
    //const questions2 = 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Interns id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your Interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your Interns school?'
        },
        {
            // what kind of employee would you like to add
            type: 'list',
            name: 'teamMember',
            message: 'Which Type of team member would you like to add?',
            choices: [
               'Engineer',
                'Intern',
                'I am done adding team members'
            ]
        }
    ]).then(answers => {
        console.log(answers)
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        newTeam.push(newIntern)
        if (answers.teamMember === 'Engineer') {
            console.log('theyd like to add an Engineer')
            newEngineer()
        } else if 
            (answers.teamMember === 'Intern') {
            newIntern()
        } else {
            console.log('They dont want to add anymore Members!')
            render(newTeam)
        }
    })
}
// after team members have been created pass them to the render function

// create a new instance for each employee
// save to var
// create an array to store Engineers and interns

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// append each engineer on the screen 
// append each intern on the screen
// append the manager on the screen

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
