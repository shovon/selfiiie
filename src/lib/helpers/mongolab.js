import 'fetch';

export function insert(apikey, database, collection, data) {
  let url = `https://api.mongolab.com/api/1/databases/${database}/collections/${collection}?apiKey=${apiKey}`
  let options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(url, options).then(function (response) {
    return response.json();
  });
}