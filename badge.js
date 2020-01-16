const QRCode = require('qrcode');
const fs = require('fs');
const pdf = require('html-pdf');
const open = require('open');


// ================== QR CODE GENERATOR ==================


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

  // ========== print code to terminal ==========
  QRCode.toString(segs, { type: 'terminal' }, (err, url) => {
    console.log('+++++++++++++++++++++++++++++++++++QR code url\n', url);
  });

  // ========== print code to pdf div ==========
  // QRCode.toCanvas('text', { errorCorrectionLevel: 'H' }, (err, canvas) => {
  //   if (err) throw err;

  //   const pdfcode = document.getElementById('pdf-qrcode');
  //   pdfcode.appendChild(canvas);
  // });

  const newEmployeeCode = `INVE${numString}`;
  // New employee code will be saved to the database
  console.log('newEmployeeCode =', newEmployeeCode);
};



// ================== PDF GENERATOR ==================

function writeToFile(html) {
  const options = {
    zoomFactor: 0.75,
  };

  pdf.create(html, options).toFile('./badge.pdf', (err, res) => {
    if (err) return console.log(err);
    console.log(res.filename);

    open('badge.pdf');
  });
}
