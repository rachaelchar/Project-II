//= =========== Location of Pic Frame and Button ===============
const pDiv = $('#picDiv');
const btnDiv = $('#btnDiv');
const width = 640;
//= ============================================================

let height = 0;
let video = null;

const streaming = false;
const cameraDiv = $('<div class="camera"><video id="video"></video><div class="overlay-desc"><h1 id="countdown"></h1></div></div>');
const canvasDiv = $('<canvas id="canvas"></canvas><div class="output"><img id="photo"></div>');
const webcam = $('<button id="webcam" class="camBtns">Start Webcam</button>');
const snapshot = $('<button id="snapshot" class="camBtns">Take Picture</button>');
const savePic = $('<button id="saveBtn" >Submit Picture</button>');

function capture(mediaStream) {
  $('#snapshot').on('click', () => {
    $('#snapshot').prop('disabled', true);
    let timeleft = 6;

    const timer = setInterval(() => {
      timeleft -= 1;
      $('#countdown').text(timeleft);
      if (timeleft <= 0) {
        clearInterval(timer);
        $('#countdown').text(' ');
      }
    }, 1000);

    setTimeout(() => {
      pDiv.empty().prepend(canvasDiv);
      $('#canvas').attr({ width, height });
      const context = $('#canvas')[0].getContext('2d');

      if (width && height) {
        context.drawImage(video[0], 0, 0, width, height);
        const data = $('#canvas')[0].toDataURL('image/png');
        $('#photo').attr('src', data);
      }

      const tracks = mediaStream.getTracks();
      tracks[0].stop();
      cameraDiv.remove();
      btnDiv.empty().append(webcam).append(savePic);
    }, 6100);
  });
}

$(document).on('click', '#webcam', () => {
  btnDiv.empty().append(snapshot);
  $('#snapshot').prop('disabled', false);
  pDiv.empty().prepend(cameraDiv);
  video = $('#video');

  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then((mediaStream) => {
      video[0].srcObject = mediaStream;
      video[0].play();
      capture(mediaStream);
    });

  video[0].addEventListener('canplay', () => {
    if (!streaming) {
      height = video[0].videoHeight / (video[0].videoWidth / width);
      $('#video').attr({ width, height });
    }
  });
});

$(document).on('click', '#saveBtn', () => {
  const canvas = document.getElementById('canvas');

  canvas.toBlob((blob) => {
    // const newImg = document.createElement('img');
    // const url = URL.createObjectURL(blob);

    // newImg.onload = () => {
    //   URL.revokeObjectURL(url);
    // };

    // newImg.src = url;
    // document.body.appendChild(newImg);
    console.log(blob);
  }, 'image/jpeg', 0.95);
});
