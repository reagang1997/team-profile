// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        const name = name;
        const id = id;
        const email = email;

        super(name, id, email);
        this.github = github;
    }
}