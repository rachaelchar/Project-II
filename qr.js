// QR code = INVE + 8 random digits

const QRCode = require('qrcode');

let numString = '';
const numbers = '1234567890';

function makeNumData(length) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    numString += (numbers.charAt(Math.floor(Math.random() * numbers.length)));
  }
}

module.exports = function generateQR() {
  console.log(makeNumData(8));
  console.log('numstring = ', numString);
  const segs = [
    { data: 'INVE', mode: 'alphanumeric' },
    { data: numString, mode: 'numeric' },
  ];

  QRCode.toString(segs, { type: 'terminal' }, (err, url) => {
    console.log('+++++++++++++++++++++++++++++++++++QR code url\n', url);
  });

  const newEmployeeCode = `INVE${numString}`;
  // New employee code will be saved to the database
  console.log('newEmployeeCode =', newEmployeeCode);
};
