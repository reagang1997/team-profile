const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { get } = require("https");

const staff = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const getManagerInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Team Managers Name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is the Team Managers ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is the Managers email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is the office number?',
                name: 'officeNumber'
            }
        ]).then((res) => {
            const { name, id, email, officeNumber } = res;

            staff.push(new Manager(name, id, email, officeNumber));
            haveManager = true;
            getEmployeeInfo();

        });
};

const getEmployeeInfo = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Add an Employee',
                choices: [
                    "Engineer", "Intern", "I am finsihed building my team"
                ],
                name: 'option'
            }
        ]).then((res) => {
            const { option } = res;

            switch (option) {
                case "Engineer":
                    getEngineerInfo();
                    break;
                case "Intern":
                    getInternInfo();
                    break;
                case "I am finsihed building my team":
                    const team = render(staff);
                    fs.writeFile(outputPath, team, (err) =>

                        err ? console.error(err) : console.log('Team Created!')
                    );
                    return;

            }

        });
}
const getEngineerInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Engineers Name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is the Engineers ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is the Engineers email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What is the Engineers GitHub username?',
                name: 'github'
            }
        ]).then((res) => {
            const { name, id, email, github } = res;

            staff.push(new Engineer(name, id, email, github));

            getEmployeeInfo();
        });
}


const getInternInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Interns Name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is the Interns ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'What is the Interns email address?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What school does the intern attend?',
                name: 'school'
            }
        ]).then((res) => {
            const { name, id, email, school } = res;

            staff.push(new Intern(name, id, email, school));

            getEmployeeInfo();
        });
}








getManagerInfo();






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
