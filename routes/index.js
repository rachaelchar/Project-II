const router = require('express').Router();
const apiRoutes = require('./api-routes');
const htmlRoutes = require('./html-routes');
const fileRoutes = require('./file-upload');

router.use('/api', apiRoutes);
router.use('/api', fileRoutes);

router.use('/', htmlRoutes);

module.exports = router;
