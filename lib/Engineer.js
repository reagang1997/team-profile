// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        const engName = name;
        const engId = id;
        const engEmail = email;

        super(engName, engId, engEmail);
        this.github = github;
        this.role = "Engineer"
    }

    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;
