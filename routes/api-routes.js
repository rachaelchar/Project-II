const router = require('express').Router();
const db = require('../models');

router.get('/employees', (req, res) => {
  db.employee.findAll()
    .then((employees) => {
      res.json(employees);
    });
});

// * how to join with working status table:
router.get('/employees/status', (req, res) => {
  db.employee.findAll({
    include: [
      db.working_status,
    ],
  })
    .then((employees) => {
      res.json(employees);
    });
});

router.get('/employees/:code', (req, res) => {
  const { code } = req.params;
  db.employee.findOne({
    where: {
      code,
    },
  })
    .then((employees) => {
      res.json(employees);
    });
});

router.post('/employees', (req, res) => {
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


module.exports = router;
