const Mock = require('mockjs')
const { writeFileToData } = require('./fn')
// 获取数据最大的cid
function findDataMaxCid( data ) {
  let maxCid = -1;
  if( data.data instanceof Array ){
    data.data.map( item => {
      maxCid = maxCid > item.cid ? maxCid : item.cid
    })
  }
  return maxCid 
}

exports.addOne = function( data, addData, url ){
  let maxCid = findDataMaxCid( data ); 
  addData.cid = maxCid; 
  addData.id = Mock.mock('@id')
  data.data.push(addData)
  return writeFileToData( data, url )
}

exports.addMany = function( data, list, url ){
  let maxCid = findDataMaxCid( data )
  list.map( item => {
    item.cid = maxCid++;
    item.id = Mock.mock('@id');
    data.data.push(item)
  })
  return writeFileToData( data, url)
}


exports.deleteOne = function( data, id, url ){
  let newData = data.data.filter( item => item.id !== id)
  return writeFileToData( newData, url) 
}

exports.deleteMany = function( data, idList, url){
  let newData = data.data.fliter( item => {
    for( let i =0, range = idList.length; i< range; i++){
      if( item.id === idList[i]){
        return false;
      }
    }
    return true;
  }) 
  return writeFileToData( newData, url)
}

exports.updateOne = function( data, updataData, url){
  let newData = data.data.map( item => {
    if( item.id === updataData.id ){
      return updataData
    }
    return item
  })
  return writeFileToData( newData, url)
}

exports.updateMany = function( data, updataDataList, url){
  let newData = data.data.map( item => {
    for( let i = 0, range = updataDataList.length; i < range; i++){
      if( item.id === updataDataList[i].id ){
        return updataDataList[i]
      }
    }
    return item
  })
  return writeFileToData( newData, url)
}

// select
exports.selectOne = function( data, id ){
  return data.data.filter( item => item.id === id)
}

// 11 - 20 10 2
exports.separateQuery = function( data, pageSize= 10, current= 1 ) {
  return data.data.filter( item => item.cid > pageSize * (current -1 ) && item.cid <= pageSize * current ) 
}


// rpAdjustmentReasion fliter
exports.fliterSelectJustmentReasion = function( data, fliterObj ={name :'', code:'', status : -1} ){
  return data.data.filter( item => 
      item.name.match(eval(`/${fliterObj.name}/`)) &&
      item.code.match(eval(`/${fliterObj.code}/`)) &&
      ( item.status === fliterObj.status || fliterObj === -1)
    ) 
}
