/**
 * By Ken Fyrstenberg
 *
 * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
 *
 * If image and context are only arguments rectangle will equal canvas
*/
function drawImageProp(ctx, img, x, y, iw, ih, w, h, offsetX, offsetY) {

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

  var r = Math.min(w / iw, h / ih),
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

let imageutils = {
  /**
   * @param context
   * @param image
   * @param width int the width of the image
   * @param height int the height of the image
   */
  fillImage: function (context, image, width, height) {
    drawImageProp(
      context,
      image,
      0,
      0,
      width,
      height,
      context.canvas.width,
      context.canvas.height
    );
  },

  createImageDOMElement: function (canvas) {
    let img = document.createElement('img');
    img.src = canvas.toDataURL();
    return img;
  },

  effects: {
    none: function (context, image, width, height) {
      imageutils.fillImage(context, image, width, height);
    },
    blackAndWhite: function (context, image, width, height) {
      imageutils.fillImage(context, image, width, height);
      let imgd = context.getImageData(0, 0, width, height);
      let pix = imgd.data;

      for (let i = 0, n = pix.length; i < n; i += 4) {
        let avg = ((pix[i] + pix[i+1] + pix[i+2])/3)|0;
        pix[i  ] = avg;
        pix[i+1] = avg;
        pix[i+2] = avg;
      }
      context.putImageData(imgd, 0, 0);
    },
    sepiaTone: function (context, image, width, height) {
      imageutils.fillImage(context, image, width, height);
      let imgd = context.getImageData(0, 0, width, height);
      let pix = imgd.data;

      for (let i = 0, n = pix.length; i < n; i += 4) {
        let r = pix[i], g = pix[i+1], b = pix[i+2];
        pix[i  ] = r*0.393 + g*0.769 + b*0.189;
        pix[i+1] = r*0.349 + g*0.686 + b*0.168;
        pix[i+2] = r*0.272 + g*0.534 + b*0.131;
      }

      context.putImageData(imgd, 0, 0);
    }
  }
};

export default imageutils;
