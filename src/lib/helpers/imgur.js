// Code from here: https://gist.github.com/shovon/ffc30770515cd7d22d2b

export function share(domImage, clientID){
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = domImage.width;
  canvas.height = domImage.height;
  ctx.drawImage(domImage, 0, 0, canvas.width, canvas.height);
  var img;
  try {
    img = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
  } catch(e) {
    img = canvas.toDataURL().split(',')[1];
  }
  var w = window.open();
  return fetch('https://api.imgur.com/3/upload.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID ' + clientID
    },
    body: JSON.stringify({
      type: 'base64',
      name: 'myimage.jpg',
      title: 'My Image',
      description: 'Made using my super application',
      image: img
    })
  }).then(function (response) {
    return response.json();
  })
}
