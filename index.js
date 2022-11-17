const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employeeDatabase = [];


    const managerPrompt = () => {
        return new Promise((resolve,reject) => {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "officeNum",
                message: "What is the manager's office number?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            employeeDatabase.push(manager);
            resolve();
        });
    });
}

    const employeePrompt = () => {
        return new Promise((resolve, reject) => {
        inquirer
        .prompt([
            {
                type: "list",
                name: "employeeRole",
                choices: [
                    "Engineer",
                    "Intern",
                    "There are no more employees to add"
                ]
            },
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                when: ({employeeRole}) => employeeRole === "Engineer"
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's id?",
                when: ({employeeRole}) => employeeRole === "Engineer"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers's email?",
                when: ({employeeRole}) => employeeRole === "Engineer"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers's Github?",
                when: ({employeeRole}) => employeeRole === "Engineer"
            },
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                when: ({employeeRole}) => employeeRole === "Intern"
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
                when: ({employeeRole}) => employeeRole === "Intern"
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
                when: ({employeeRole}) => employeeRole === "Intern"
            },
            {
                type: "input",
                name: "school",
                message: "What school is the intern from?",
                when: ({employeeRole}) => employeeRole === "Intern"
            }
        ]).then( answers => {
            if (answers.employeeRole){
                switch (answers.employeeRole){
                    case "Engineer":
                        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        employeeDatabase.push(newEngineer);
                        break;
                    case "Intern":
                        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        employeeDatabase.push(newIntern);
                        break;
                }
                return employeePrompt().then(() => resolve());
            } else {
                return resolve();
            }
        })
    })
}
    

    managerPrompt().then(() => {
        return employeePrompt();
    })