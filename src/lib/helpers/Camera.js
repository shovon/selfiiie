navigator.getMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

let vendorURL = window.URL || window.webkitURL;

/**
 * By Ken Fyrstenberg
 *
 * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
 *
 * If image and context are only arguments rectangle will equal canvas
*/
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

  if (arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }

  // default offset is center
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;

  var iw = img.videoWidth,
      ih = img.videoHeight,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,   // new prop. width
      nh = ih * r,   // new prop. height
      cx, cy, cw, ch, ar = 1;

  // decide which gap to fill    
  if (nw < w) ar = w / nw;
  if (nh < h) ar = h / nh;
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  // fill image in dest. rectangle
  ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
}

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
      drawImageProp(context, this.video, 0, 0, canvas.width, canvas.height);
    };
    animate();
  }
}
