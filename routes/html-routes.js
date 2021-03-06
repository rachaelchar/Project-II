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

router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/profile.html'));
});

router.get('/sampleBadge', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/sampleBadge.html'));
});


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
