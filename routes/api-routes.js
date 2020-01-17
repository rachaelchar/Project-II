const router = require('express').Router();
const db = require('../models');

router.get('/employees', (req, res) => {
  let query;
  if (req.query.id) {
    query = db.employee.findOne({
      where: { id: req.query.id },
      include: [db.working_status, db.pay_type],
    })
  } else if (req.query.code) {
    query = db.employee.findOne({
      where: { code: req.query.code },
      include: [db.working_status, db.pay_type],
    })
  } else {
    query = db.employee.findAll({
      include: [db.working_status, db.pay_type],
    })
  }

  return query.then(employees => res.json(employees));
});

router.put('/employees/clockin', (req,res) => {
  db.employee.update(
    { 
      working_status_id: req.body.working_status_id,}, 
    { where: { id: req.body.id }}
  )
  .then(function(dbEmployee) {
    res.json(dbEmployee);
  });
})

router.post('/employees', (req, res) => {
// router.post('/api/employees', (req, res) => {
  const employee = req.body;
  db.employee.create(employee)
    .then(() => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        errors: err.errors,
      });
    });
});

router.delete('/employees/:id', (req, res) => {
  const { id } = req.params;
  db.employee.destroy({
    where: {
      id,
    },
  }).then(() => {
    res.json({
      success: true,
    });
  });
});

router.get('/clockins', (req, res) => {
 
});


module.exports = router;
