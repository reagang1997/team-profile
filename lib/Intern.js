// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        const intName = name;
        const intId = id;
        const intEmail = email;

        super(intName, intId, intEmail);
        this.school = school;
        this.role = "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
