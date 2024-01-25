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

  
const { dbName } = require('../utils/variable')
const { fliterSelectJustmentReasion, deleteOne, addOne, updateOne } = require('../utils/handle')
const rpAdjustmentReasonUrl = '../db/data/' + dbName.rpAdjustmentReason 
let rpAdjustmentReasonDB = require('../db/data/t_cds_reward_rpAdjustmentReason.json')


app.get('/apiRewards/adjustmentReason/query', (req, res)=>{
  // console.log(req.query)
  let fliterObj = {
    reasonName: req.query.reasonName || '',
    reasonCode: req.query.reasonCode || '',
    status: req.query.status === undefined ? undefined : req.query.status === 'disabled' ? 0 : 1
  }
  let data = fliterSelectJustmentReasion(rpAdjustmentReasonDB, fliterObj )
  res.send({
    code: '0',
    message: 'success',
    data: data,
  });
})

app.post('/apiRewards/adjustmentReason/add', (req, res) => {
  console.log( req.body)
  rpAdjustmentReasonDB = addOne( rpAdjustmentReasonDB, req.body)
  res.send({
    code: '0',
    message: 'success',
    data: rpAdjustmentReasonDB,
  });
})

app.post('/apiRewards/adjustmentReason/update', (req, res)=>{
  console.log( req.body )
  rpAdjustmentReasonDB = updateOne(rpAdjustmentReasonDB, req.body )
  res.send({
    code: '0',
    message: 'success',
    data: rpAdjustmentReasonDB,
  });
})

app.post('/apiRewards/adjustmentReason/remove', (req, res) => {
  console.log( req.body.id )
  rpAdjustmentReasonDB = deleteOne( rpAdjustmentReasonDB, req.body.id)
  res.send({
    code: '0',
    message: 'success',
    data: rpAdjustmentReasonDB,
  });
})


app.listen(8090, ()=> {
  console.log('listen to 8090')
})



