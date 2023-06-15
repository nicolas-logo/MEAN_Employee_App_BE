const { Router } = require('express');
const employeesCtrl = require('./../controllers/employees.controller');

const router = Router();

router.get('/', employeesCtrl.GetEmployees);
router.post('/', employeesCtrl.CreateEmployee);
router.put('/:id', employeesCtrl.UpdateEmployee);
router.get('/:id', employeesCtrl.GetEmployee);
router.delete('/:id', employeesCtrl.DeleteEmployee);

module.exports = router;