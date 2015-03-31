import imageutils from './imageutils';

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
    this.gotCamera = false;
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
        this.gotCamera = true;
        callback(null);
      },
      callback
    );
  }

  stop() {
    if (this.gotCamera) {
      this.gotCamera = false;
      this.stream.stop();
      this.animate = false;
    }
  }

  pause() {
    this.animate = false;
  }

  resume() {
    this.animate = true;
  }

  snapshot() {
    this.stop();
    return this.canvas.toDataURL();
  }

  render(canvas) {
    this.canvas = canvas;
    let context = canvas.getContext('2d');
    this.context = context;
    this.animate = true;

    let animate = () => {
      if (this.animate) {requestAnimationFrame(animate);}
      imageutils.fillImage(
        context,
        this.video,
        this.video.videoWidth,
        this.video.videoHeight
      );
    };
    animate();
  }
}
