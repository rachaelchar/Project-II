// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("pic");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//= =========== Location of Pic Frame and Button ===============
const pDiv = $('#picDiv');
const btnDiv = $('#btnDiv');
const width = 640;
//= ============================================================

let height = 0;
let video = null;

const streaming = false;
const cameraDiv = $('<div class="camera"><video id="video"></video><div class="overlay-desc"><h1 id="countdown"></h1></div></div>');
const canvasDiv = $('<canvas id="canvas"></canvas><div class="output"><img id="IDphoto"></div>');
const webcam = $('<button id="webcam" class="camBtns cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl text-center px-5 py-2 inline-block text-blue-100 hover:text-white rounded">Start Webcam</button>');
const snapshot = $('<button id="snapshot" class="camBtns cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl text-center px-5 py-2 inline-block text-blue-100 hover:text-white rounded">Take Picture</button>');
const savePic = $('<button id="saveBtn" class="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl text-center px-5 py-2 inline-block text-blue-100 hover:text-white rounded" >Submit Picture</button>');

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
        $('#IDphoto').attr('src', data);
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
  const data = $('#canvas')[0].toDataURL('image/png');
  $('#profile-pic').attr('src', data);
  modal.style.display = "none";
});
