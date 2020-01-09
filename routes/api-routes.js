const router = require('express').Router();
const db = require('../models');

router.get('/employees', (req, res) => {
    db.Employee.findAll()
        .then((employees) => {
            res.json(employees);
        });
});

router.post('/employees', (req, res) => {
    const employee = req.body;
    db.Employee.create(employee)
        .then((results) => {
            res.json({
                success: true
            });
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                success: false,
                errors: err.errors
            });
        });
});

module.exports = router;
