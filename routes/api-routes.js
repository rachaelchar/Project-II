const router = require('express').Router();
const db = require('../models');

router.get('/employees', (req, res) => {
  db.employee.findAll()
    .then((employees) => {
      res.json(employees);
    });
});

router.get('/employees/:code', (req, res) => {
  const { code } = req.params;
  db.employee.findOne({
    where: {
      code: code,
    },
  })
    .then((employees) => {
      res.json(employees);
    });
});

// router.get('/employees/:code', (req, res) => {
//   const { code } = req.params;
//   console.log('=============================',code)
//   db.employee.findOne({
//     where: {
//       code: code,
//     },
//   })
//     .then((employees) => {
//       res.json(employees);
//     });
// });

router.post('/employees', (req, res) => {
  const employee = req.body;
  db.Employee.create(employee)
    .then((results) => {
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
  db.Employee.destroy({
    where: {
      id,
    },
  }).then((response) => {
    res.json({
      success: true,
    });
  });
});


module.exports = router;
