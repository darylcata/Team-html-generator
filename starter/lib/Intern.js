// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//initial provided by Dan(instructor)

const Employee = require("../lib/Employee");


class Intern extends Employee {
    constructor(name, id, email, school) { 
        super(name, id, email);
        this.school = school;
        
    }

    getSchool() {

    };

    getRole() {
        return Intern;
    }
}

module.exports = Intern;