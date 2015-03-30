navigator.getMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

var vendorURL = window.URL || window.webkitURL;

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

  render(canvas) {
    let context = canvas.getContext('2d');
    this.animate = true;

    var animate = () => {
      if (this.animate) {requestAnimationFrame(animate);}
      let sx, sy, sw, sh, dx, dy, dw, dh;
      if (this.video.videoWidth > this.video.videoHeight) {
        sx = (this.video.videoWidth - this.video.videoHeight)/2;
        sy = 0;
        sw = this.video.videoHeight;
        sh = this.video.videoHeight;
      } else {
        sx = 0;
        sy = (this.video.videoHeight - this.video.videoWidth)/2;
        sw = this.video.videoWidth;
        sh = this.video.videoWidth;
      }
      dx = 0;
      dy = 0;
      dw = canvas.width;
      dh = canvas.height;
      context.drawImage(this.video, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    animate();
  }
}
