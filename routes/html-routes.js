const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/employee-pic', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/picture.html'));
});

router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/adminPage.html'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});
router.get('/employees', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/employees.html'));
});


// Place this route below all others to send he index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
