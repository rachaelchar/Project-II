// QR code = INVE + 8 random digits

const QRCode = require('qrcode');

function makeNumData(length) {
  let result = '';
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach(number){
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));

  return result;
  }
  console.log(result);
}

console.log(makeNumData(8));

module.exports = function generateQR() {
  const segs = [
    { data: 'INVE', mode: 'alphanumeric' },
    { data: '0123456', mode: 'numeric' },
  ];

  QRCode.toString(segs, { type: 'terminal' }, (err, url) => {
    console.log('+++++++++++++++++++++++++++++++++++QR code url', url);
  });
};
