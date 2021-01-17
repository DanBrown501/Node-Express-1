const express = require('express');
let axios = require('axios');
const { info } = require('console');
var app = express();

app.use(express())

app.post('/', async function(req, res, next) {
  let test = []
  for (d of req.body.developers){
  try {
      let rest = await axios.get(`https://api.github.com/users/${d}`)
      let out = results.map(r => ({ name: r.data.bio, name: r.data.name }));
      test.push(out)
    
    } catch(err) {
        next(err)
    }
  }
  return res.send(JSON.stringify(out));
  });

app.listen(3000);
