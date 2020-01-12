const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

<<<<<<< HEAD
router.get('/employee-pic', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/picture.html'));
});

=======
router.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/adminPage.html'));
});

router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/profile.html'));
});


>>>>>>> 5640f8051fce3342ba40a39135d85750ee41e05d
// Place this route below all others to send he index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
