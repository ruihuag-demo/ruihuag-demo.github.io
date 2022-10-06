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

app.get('/apiRewards/storeGroup/get?pageSize=10', (req, res)=>{
  res.send({
    code: '0',
    message: '成功',
    data : Mock.mock({
      'list|1-10' : [
        {
          'id|+1': 1
        }
      ]
    })
  })
})

app.get('/', (req, res)=>{
  res.send({
    msg: 'success',
    data : Mock.mock({
      'list|1-10' : [
        {
          'id|+1': 1
        }
      ]
    })
  })
})

app.post('/postdemo', (req, res) => {
  console.log("req :" + req.body)
  console.log("res : " + res)
})

app.listen(8090, ()=> {
  console.log('listen to 8090')
})