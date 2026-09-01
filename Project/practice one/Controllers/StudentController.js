const Student = require('../Models/student.js')

const getAllstudents = async (req,res) => {
    try {
        const students = await Student.find()
        res.send('Student Fetched' + students.lenght)
    } catch (error) {
        res.send('Error'+error)
    }
}

module.exports = {getAllstudents}