const express = require('express');
const upload = require('../services/file-upload');

const router = express.Router();
const singleUpload = upload.single('image');

router.post('/image-upload', (req, res) => {
  singleUpload(req, res, () => {
    res.json({ imageUrl: req.file.location });
  });
});

module.exports = router;
