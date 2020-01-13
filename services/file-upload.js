const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
// const path = require('path');

const config = require('../config/config.js');

aws.config.update({
  secretAccessKey: config.aws.secretAccessKey,
  accessKeyId: config.aws.accessKeyId,
  region: config.aws.region,
});

const s3 = new aws.S3({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  Bucket: 'employee-login',
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'employee-login',
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: 'TESTING_META_DATA!' });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = upload;
