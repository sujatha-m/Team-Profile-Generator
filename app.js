const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeesArray = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function createManager(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Enter manager Name:"
        },

        {
            type:"input",
            name:"id",
            message:"Enter manager Id:"
        },

        {
            type:"input",
            name:"email",
            message: "Enter manager Email:"
        },

        {
            type:"input",
            name:"officeNumber",
            message:"Enter manager's office number:"
        }
    ])
    .then(function(res){
        employeesArray.push(new Manager(res.name, res.id, res.email, res.officeNumber));
        createEmployee();
    });
}

function createEmployee(){
    inquirer
    .prompt(
        {
            type:"list",
            message:"Add another employee",
            name:"role",
            choices: ["Engineer","Intern", "I don't want to add any more employee"]

        }
    )
    .then(function(answer){
        switch(answer.role){
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                getHTML = render(employeesArray);
                checkDirectorySync(OUTPUT_DIR);
                fs.writeFile(outputPath, getHTML, function(err){
                    if (err)
                    throw err;
            });
        };

    });
};

function createEngineer(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Enter engineer's name:"
        },
        {
            type:"input",
            name:"id",
            message:"Enter Engineer's Id:"
        },
        {
            type:"input",
            name:"email",
            message:"Enter engineer's Email:"
        },
        {
            type:"input",
            name:"github",
            message:"Enter Engineer's github username:"
        },      
    ])
    .then(function(res){
        employeesArray.push(new Engineer(res.name, res.id, res.email, res.github))
        createEmployee()
    })
}

function createIntern(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Enter intern's name:"
        },
        {
            type:"input",
            name:"id",
            message:"Enter intern's Id:"
        },
        {
            type:"input",
            name:"email",
            message:"Enter intern's Email:"
        },
        {
            type:"input",
            name:"school",
            message:"Enter intern's School name:"
        }
    ])
    .then(function(res){
        employeesArray.push(new Intern(res.name, res.id, res.email, res.school));
        createEmployee()
    });
}

function checkDirectorySync(directory){
    try{
        fs.statSync(directory);
    } catch(e){
        fs.mkdirSync(directory)
    }
}

createManager()
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
