import 'fetch';
import querystring from 'querystring';

let mongolab = {
  insert: function (apikey, database, collection, data) {
    let url = `https://api.mongolab.com/api/1/databases/${database}/collections/${collection}?apiKey=${apikey}`
    let options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  },

  find: function (apikey, database, collection, query) {
    let url = `https://api.mongolab.com/api/1/databases/${database}/collections/${collection}?apiKey=${apikey}`;
    return fetch(`${url}&${querystring.stringify(query)}`)
      .then(function (response) {
        return response.json();
      });
  }
}

export default mongolab;
