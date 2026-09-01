const Employee = require('../models/employee.js')

const getAllEmployee = async (req,res) => {
    try {
        const employee = await Employee.find()
        res.render('employee', {employee})
    } catch (error) {
        res.send('Error:'+ error)
    }
}

const getNewEmployeeForm = async (req,res) => {
    res.send('new')
}

const createEmployee = async (req,res) => {
    try {
        const employee = new Employee(req.body)
        await employee.save()
        res.redirect('/employee')
    } catch (error) {
        res.send('Error:' + error)
    }
}

const getEditEmployeeForm = async (req,res) => {
    try {
        const employee = await Employee.findById(req.params.id)
    } catch (error) {
        res.send('Error:'+error)
    }
}

const updateEmployee = async (req,res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, res.body)
        res.redirect('/employee')
    } catch (error) {
        res.send('Error:' + error)
    }
}

const deleteEmployee = async (req,res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id)
        res.redirect('/employee')
    } catch (error) {
        res.send('Error:'+error)
    }
}


module.exports = {
    getAllEmployee,
    getNewEmployeeForm,
    createEmployee,
    getEditEmployeeForm,
    updateEmployee,
    deleteEmployee
}