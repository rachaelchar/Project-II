let width = 320;
let height = 0;

const streaming = false;
let video = null;
let canvas = null;
let photo = null;

const capture = $('#capture');
const beginvideo = $('#beginvideo');

function takepicture() {
  $('.pictureDiv').prepend($('<canvas id="canvas"></canvas><div class="output"><img id="photo"></div>'));

  canvas = document.getElementById('canvas');
  photo = document.getElementById('photo');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);



  const context = canvas.getContext('2d');
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  } else {
    clearphoto();
  }
}

function startup() {
  camera = $('<div class="camera">');
  video = $('<video id="video">');
  camera.append(video)
  $('.pictureDiv').prepend(camera)
  video = video[0]

  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(mediaStream => {
      video.srcObject = mediaStream;
      video.play();

      
      capture.click((ev) => {
        takepicture();
        stopCamera(mediaStream);
        ev.preventDefault();
      });

    })

  function stopCamera(mediaStream) {
    const tracks = mediaStream.getTracks()
    tracks[0].stop()
    camera.remove()
  }


  video.addEventListener('canplay', () => {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);

      // eslint-disable-next-line no-restricted-globals
      if (isNaN(height)) {
        height = width / (4 / 3);
      }

      video.setAttribute('width', width);
      video.setAttribute('height', height);
    }
  });

}



beginvideo.click(() => {
  startup();
});
