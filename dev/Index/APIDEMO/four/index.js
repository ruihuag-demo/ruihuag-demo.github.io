const express = require('express')
let Mock = require('mockjs')
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
})

/**
 * 响应格式
 * message: 'success'
 * code:'0'
 * data:{}
 */

app.get('/', (req, res) => {
  res.send({
    code: 0,
    message: 'success',
    data: 'connect success',
  })
})

app.listen(4000, ()=> {
  console.log('listen to 4000')
})



