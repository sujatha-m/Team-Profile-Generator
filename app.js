//Include profile generator modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//Include inquirer module for getting user selected prompts.
const inquirer = require("inquirer");
//Include path module for getting user selected prompts.
const path = require("path");
//Include fs module for getting user selected prompts.
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
//create a team.html file under output folder
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//Holds employees
const employeesArray = [];

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// Questions related to project which helps in building Manager profile content
function createManager(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Enter manager Name:",
            default:"Alex"
        },

        {
            type:"input",
            name:"id",
            message:"Enter manager Id:",
            default:"9"
        },

        {
            type:"input",
            name:"email",
            message: "Enter manager Email:",
            default:"alex@gmail.com"

        },

        {
            type:"input",
            name:"officeNumber",
            message:"Enter manager's office number:",
            default:"2"
        }
    ])

    //After prompts based on responses it will create new Manager profile
    .then(function(res){
        employeesArray.push(new Manager(res.name, res.id, res.email, res.officeNumber));
        createEmployee();
    });
};

// Questions related to project which helps in building createEmployee profile content
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

    //switch case to if based on answers to create if whether the engineer profile or intern profile
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

// Questions related to project which helps in building Engineer profile content
function createEngineer(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Enter engineer's name:",
            default:"John"
        },
        {
            type:"input",
            name:"id",
            message:"Enter Engineer's Id:",
            default:"6"
        },
        {
            type:"input",
            name:"email",
            message:"Enter engineer's Email:",
            default:"john@gmail.com"
        },
        {
            type:"input",
            name:"github",
            message:"Enter Engineer's github username:",
            default:"john-123"
        },      
    ])

    //After prompts based on responses it will create new Engineer profile
    .then(function(res){
        employeesArray.push(new Engineer(res.name, res.id, res.email, res.github))
        createEmployee()
    });
};

// Questions related to project which helps in building Intern profile content
function createIntern(){
    inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"Enter intern's name:",
            default:"Rose"
        },
        {
            type:"input",
            name:"id",
            message:"Enter intern's Id:",
            default:"55"
        },
        {
            type:"input",
            name:"email",
            message:"Enter intern's Email:",
            default:"rose@gmail.com"
        },
        {
            type:"input",
            name:"school",
            message:"Enter intern's School name:",
            default:"Carleton University"
        }
    ])

    //After prompts based on responses it will create new intern profile
    .then(function(res){
        employeesArray.push(new Intern(res.name, res.id, res.email, res.school));
        createEmployee()
    });
};

function checkDirectorySync(directory){
    try{
        fs.statSync(directory);
    } catch(e){
        fs.mkdirSync(directory)
    }
    console.log("Employees profiles generated!!\n");
};

//calling createManager function to create employees
createManager()


