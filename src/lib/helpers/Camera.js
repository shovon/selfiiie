navigator.getMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

let vendorURL = window.URL || window.webkitURL;

export default class Camera {
  constructor() {
    this.animate = false;
  }

  requestCamera(callback) {
    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      (stream) => {
        this.stream = stream;
        this.video = document.createElement('video');
        this.video.autoplay = true;
        this.video.src = vendorURL.createObjectURL(stream);
        this.video.play();
        callback(null);
      },
      callback
    );
  }

  stop() {
    this.stream.stop();
    this.animate = false;
  }

  pause() {
    this.animate = false;
  }

  snapshot() {
    this.pause();
    return this.canvas.toDataURL();
  }

  render(canvas) {
    this.canvas = canvas;
    let context = canvas.getContext('2d');
    this.context = context;
    this.animate = true;

    let animate = () => {
      if (this.animate) {requestAnimationFrame(animate);}
      let sx, sy, sw, sh, dx, dy, dw, dh;

      let canvasAspectRatio = canvas.width / canvas.height;
      let videoAspectRatio = this.video.videoWidth / this.video.videoHeight;

      let newWidth, newHeight;

      if (videoAspectRatio < canvasAspectRatio) {
        newWidth = canvas.width;
        newHeight = (newWidth / canvas.width)*this.video.videoHeight;

        sx = 0;
        sy = 0;
        sw = this.video.videoWidth;
        sh = this.video.videoHeight;
      } else {
        newHeight = canvas.height;
        newWidth = (newHeight / canvas.height)*this.video.videoWidth;

        sx = 0;
        sy = 0;
        sw = this.video.videoWidth;
        sh = this.video.videoHeight;
      }

      if (newWidth > newHeight) {
        dx = 0;
        dy = (newHeight - newWidth)/2;
        dw = newWidth;
        dh = newHeight;
      } else {
        dx = (newWidth - newHeight)/2;
        dy = 0;
        dw = newWidth;
        dh = newHeight;
      }

      context.drawImage(this.video, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    animate();
  }
}
