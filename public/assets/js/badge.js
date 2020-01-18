// const QRCode = require('qrcode');
// const fs = require('fs');
// const pdf = require('html-pdf');
// const open = require('open');
// const generateHTML = require('generateHTML.js');

// // ================== QR CODE GENERATOR ==================


// let numString = '';
// const numbers = '1234567890';

// function makeNumData(length) {
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < length; i++) {
//     numString += (numbers.charAt(Math.floor(Math.random() * numbers.length)));
//   }
// }

// module.exports = function generateQR() {
//   console.log(makeNumData(8));
//   console.log('numstring = ', numString);
//   const segs = [
//     { data: 'INVE', mode: 'alphanumeric' },
//     { data: numString, mode: 'numeric' },
//   ];

//   // ========== print code to terminal ==========
//   QRCode.toString(segs, { type: 'terminal' }, (err, url) => {
//     console.log('+++++++++++++++++++++++++++++++++++QR code url\n', url);
//   });

//   // ========== print code to pdf div ==========
//   // QRCode.toCanvas('text', { errorCorrectionLevel: 'H' }, (err, canvas) => {
//   //   if (err) throw err;

//   //   const pdfcode = document.getElementById('pdf-qrcode');
//   //   pdfcode.appendChild(canvas);
//   // });

//   const newEmployeeCode = `INVE${numString}`;
//   // New employee code will be saved to the database
//   console.log('newEmployeeCode =', newEmployeeCode);
// };


// ================== BADGE GENERATOR ==================




const code = document.location.search.replace(/^.*?\=/, '');

const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
};

QRCode.toDataURL(code, opts, (err, url) => {
  if (err) throw err;

  const img = document.getElementById('photo');
  img.src = url;
});


axios.get(`/api/employees/?code=${code}`)
  .then((response) => {
    $('.badge-img').attr('src', `./assets/images/employees/${response.data.code}.png`);
    $('#pdf-name').text(`${response.data.first_name} ${response.data.last_name}`);
    $('#pdf-position').text(`${response.data.position}`);
  });

  $(document).on('click', '#return', function (event) {
    axios.get(`/api/employees/?code=${code}`)
    .then((response) => {
      window.location = `/profile?code=${response.data.id}`;
    });
  });