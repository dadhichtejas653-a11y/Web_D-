const express = require('express')
const router = express.Router()

const {
    getAllEmployee,
    getNewEmployeeForm,
    createEmployee,
    getEditEmployeeForm,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee_controller.js')

router.get('/', getAllEmployee)
router.get('/new',getNewEmployeeForm)
router.post('/', createEmployee)
router.get('/:id/edit', getEditEmployeeForm)
router.post('/:id/update', updateEmployee)
router.post('/:id/delete', deleteEmployee)


module.exports = router