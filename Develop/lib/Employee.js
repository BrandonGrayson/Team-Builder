// TODO: Write code to define and export the Employee class
// we need a function called getName()
function Employee (name, id, email) {
    this.name = name
    this.id = id
    this.email = email
    this.getName = function (name) {
        return this.name
    }
    this.getId = function (id) {
        return this.id
    }
    this.getEmail = function (email) {
        return this.email
    }
    this.getRole = function (role) {
        return 'Employee'
    }
}

module.exports = Employee
