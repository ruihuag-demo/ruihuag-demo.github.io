const express = require('express')
let app = express()
app.use(express.urlencoded()) // post请求需要使用
const cookieParser=require("cookie-parser");  // cookie需要
app.use(cookieParser);
app.get('/', (req, res) => {
  // console.log(req, res)
  res.send(`success`)
})


// http://localhost:9000/tp?goods=1 
// goods : '1'

app.get('/tp', (req, res) => {
  console.log(req.query || 'query null')
  console.log(req.body || 'body null');
  res.send(`tp success ${req.query.goods||0}`)
})

app.post('/login', async (req, res) => {
  let username = req.body.username || 'username null'
  let password = req.body.passowrd || 'password null'
  console.log(req.query || 'query null')
  console.log(req.body || 'body null');
  res.send('login'+ username + password )
})

// 
app.listen(9090, ()=> {
  console.log(`linten to 9090`);
});
