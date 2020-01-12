const path = require('path');
const router = require('express').Router();

router.get('/employees', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/employee-pic', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/picture.html'));
});

// Place this route below all others to send he index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
