const Mock= require('mockjs')
const express = require('express')
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
let { data } = require('../db/data/t_cds_reward_rpAdjustmentReason.json')
const { findDBMaxCid } = require('../utils/handle')

/**
 * 分页查询
（1）请求地址：apiRewards/rewardEvent/justmentsPage
（2）请求方式：GET
params:　pageSize pageNo
locale, name, code, status, pageSize, pageNo, pageSort
 */

// 分页查找
function justmentsPage( parmas ){
  let { locale, name, code, status, pageSize, pageNo, pageSort} = parmas;
  let obj = [];
  let newData = [];
  if( locale === undefined ){
    newData = data;
  }else{
    // 过滤处理
    if( locale === 'en_US' ){
      newData = data.filter( item =>
        ( item.name['en_US'].match(eval(`/${name}/`)) || name === undefined)&&
        ( item.code['en_US'].match(eval(`/${code}/`)) || code === undefined)&&
        ( item.status === status || status === undefined ))
    }else if( locale === 'zh_CN'){
      newData = data.filter( item =>
        ( item.name['zh_CN'].match(eval(`/${name}/`)) || name === undefined)&&
        ( item.code['zh_CN'].match(eval(`/${code}/`)) || code === undefined)&&
        ( item.status === status || status === undefined ))
    }else if( locale === 'zh_TW'){
      newData = data.filter( item =>
        ( item.name['zh_TW'].match(eval(`/${name}/`)) || name === undefined)&&
        ( item.code['zh_TW'].match(eval(`/${code}/`)) || code === undefined)&&
        ( item.status === status || status === undefined ))
    }
  }

  // 分页 1 10   1 - 10
  for( let i=(pageNo-1)*pageSize; i< pageNo*pageSize && i < newData.length　; i++){
    obj.push(
      newData[i]
    )
  }
  return {
    code: '0',
    message:'成功',
    data: {
      pageNo,
      pageSize,
      totalCount: newData.length,
      result: obj
    }
  }
}

app.get('/apiRewards/rewardEvent/justmentsPage', (req, res) => {
  console.log( (new Date()).toLocaleTimeString() , 'justmentsPage');
  console.log( req.query );
  let { locale, code, name, status, pageSize, pageNo, pageSort} = req.query;
  let params = {
    locale : locale,
    code: code,
    name: name,
    status: status === undefined ? undefined :Number(status),
    pageSize: Number(pageSize),//分页大小
    pageNo: Number(pageNo),// 页码
    pageSort:'',// 排序
  }
  res.send(justmentsPage(params));
})

/* console.log(justmentsPage({
  locale : 'zh_CN',
  code: 'O',
  name: 'C',
  status: 1,
  pageSize:10,//分页大小
  pageNo:1,// 页码
  pageSort:'',// 排序
}))  */



// 添加, 修改justments原因
//（1）请求地址：apiRewards/rewardEvent/saveJustmentReason
//（2）请求方式：POST
// 不传id 为新增, 传id为修改
// params : code, name, description, id, status, locale

function saveJustmentReason( params ) {
  let { code, name, description, id, status, locale } = params;
  let newItem = {};
  if( id === null || id === undefined) {
    // add
    let maxCid = findDBMaxCid(data)
    newItem = {
      cid: ++maxCid,
      id: Mock.mock('@id'),
      status,
      code:　{
        'en_US': code,
        'zh_CN': code,
        'zh_TW': code,
      },
      name:{
        'en_US': name,
        'zh_CN': name,
        'zh_TW': name,
      } ,
      description:{
        'en_US': description,
        'zh_CN': description,
        'zh_TW': description,
      }
    }
    data.push(newItem)
  }else{
    // edit
    let newData = []
    newData = data.map( item =>{
      if(item.id === id){
        item.status = status
        if(locale === 'en_US'){
          item.code['en_US'] = code
          item.name['en_US'] = name
          item.description['en_US'] = description
        }
        if(locale === 'zh_CN'){
          item.code['zh_CN'] = code
          item.name['zh_CN'] = name
          item.description['zh_CN'] = description
        }
        if(locale === 'zh_TW'){
          item.code['zh_TW'] = code
          item.name['zh_TW'] = name
          item.description['zh_TW'] = description
        }
      }
      newItem = item;
      return item
    })      
    data = newData;    
  }
  return {
    code: '0',
    message:'成功',
    data: {
      // pageNo,
      // pageSize,
      // totalCount: calcTotalCount(data),
      result: newItem
    }
  }
}

app.post('/apiRewards/rewardEvent/saveJustmentReason', (req, res)=> {
  console.log( (new Date()).toLocaleTimeString() , 'saveJustmentReason');
  console.log(req.body);
  req.body.status = Number(req.body.status)
  res.send(saveJustmentReason(req.body))
})

/* saveJustmentReason({
  // id: '222300198904113655',
  code: 'GRH',
  name:　'grh',
  description: 'grh come on',
  status: 1,
  locale:'zh_CN'
})
console.log(data[data.length-1]) */


//（1）请求地址：apiRewards/rewardEvent/delEvent
//（2）请求方式：DELETE

function delEvent(id) {
  let newData = data.filter( item =>　item.id !== id)
  let delNum = data.length - newData.length
  data = newData
  return {
    code:'0',
    message: '成功',
    data:{
      num : delNum,
    }
  }
}

app.post('/apiRewards/rewardEvent/delEvent',(req, res) => {
  console.log( (new Date()).toLocaleTimeString() , 'delEvent');
  console.log( req.body.id)
  res.send(delEvent(req.body.id))
})

/* console.log(data[data.length-1])
console.log(delEvent('222300198904113655'))
console.log(data[data.length-1]) */

app.get('/', (req,res) => {
  res.send({
    msg: 'success'
  })
})


app.listen( 8888, () => {
  console.log('listen 8888')
})