const employeesCtrl = {}

const Employee = require('../models/Employee');

employeesCtrl.GetEmployees = async (req, res) => {
    const employees = await Employee.find(); 
    res.json(employees);
;}

employeesCtrl.GetEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeesCtrl.CreateEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();

    res.send({message: "Employee created."})
}
employeesCtrl.UpdateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.send({status: "Employee Updated"})
}

employeesCtrl.DeleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send({status: "Employee deleted"})
}

module.exports = employeesCtrl;