const fetch = require('node-fetch')
fetch('http://localhost:8090/')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      console.log(json.data.list)
    });
