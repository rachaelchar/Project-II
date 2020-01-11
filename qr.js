// QR code = INVE + 8 random digits


const QRCode = require('qrcode');

module.exports = function generateQR() {
  const segs = [
    { data: 'INVE', mode: 'alphanumeric' },
    { data: '0123456', mode: 'numeric' },
  ];

  QRCode.toString(segs, { type: 'terminal' }, (err, url) => {
    console.log('+++++++++++++++++++++++++++++++++++QR code url', url);
  });
};

// generateQR();
