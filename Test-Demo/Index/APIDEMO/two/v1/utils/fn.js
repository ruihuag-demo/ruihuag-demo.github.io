/**
 * 定义一些使用的方法
 */
const fs = require('fs')

exports.writeFileToData = function(db, url){
  // convert JSON object to string
  const data = JSON.stringify(db);
  
  // write JSON string to a file
  fs.writeFile( url + '.json', data, (err) => {
    if (err) {
        return false;
    }
    console.log( url + " JSON data is saved.");
    return true;
  });
}
/**
 * 
 * @param { 一的数组} oneArr 
 * @param { 多的数组 } manyArr 
 * @param { 一对多的个数 } num(itemidList的长度) 
 * @return [{
 *  cid : 数据的id
 *  groupId: '一' 对应的 id
 *  itemIdList: [] '多'对应的 id数组
 * }]
 */
exports.manyToOne = function(oneArr, manyArr, num=5 ){
  // const {} = scheme;
  const returnObj = [];
  for( let i=0, j = 0; i < oneArr.data.length && j < manyArr.data.length; i++){
    let tempObj = {
      cid:'',
      groupId: '',
      itemIdList:[],
    };
    tempObj.groupId = oneArr.data[i].id
    tempObj.cid = i+1;
    for(let t = 0; t< num; t++){
      tempObj.itemIdList.push(manyArr.data[j].id)
    }
    returnObj.push(tempObj)
  }
  return {data : returnObj};
}