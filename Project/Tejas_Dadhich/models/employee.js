const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    Employee_name: String,
    Email: String,
    Department: String,
    Salary: Number,
    Experience:Number,
    Designation: String,
    Joining_Date: Date
})

const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee