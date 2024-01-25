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


const fs = require('fs')
const url = '../db/data/';
let Data = {};
fs.readdirSync(url).forEach(element => {
  Data[element.split('.')[0]] = require(url+element);
});

app.get('/', (req, res) => {
  res.send({
    code: 0,
    message: 'success',
    data: 'connect success',
  })
})


app.get('/earnPointRecord/findPage', (req, res)=>{
  // console.log(req.query)
  let data = JSON.parse(JSON.stringify(Data.earnPointRecord));
  let fliterObj = {
    earnDate: req.query.earnDate || '',
  }

  if( fliterObj.earnDate !== '' ){
    data = data.data.filter( item => item.earnDate === fliterObj.earnDate )
  }
  
  res.send({
    code: '0',
    message: 'success',
    data,
  });
})

app.listen(8190, ()=> {
  console.log('listen to 8190')
})



