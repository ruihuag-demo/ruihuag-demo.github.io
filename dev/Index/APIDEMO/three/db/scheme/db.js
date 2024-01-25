/**
 * 定义数据结构
 * 生成数据
 */

let Mock = require('mockjs')

module.exports.rewardPoint = 
  Mock.mock({
    'data|21' : [
      {
        "id": '@id',
        'cid|+1': 1,
        'Description': '@name',
        'sku':  '@guid',
        'points|0-3': 0,
      }
    ]
  })



module.exports.earnPointRecord = 
  Mock.mock({
    'data|21' : [
      {
        'id': '@id',
        'cid|+1': 1,
        'MemberId': '@guid',
        'earnDate': '@date("yyyy-MM-dd")',
        'uaid': '@guid',
        'sku': '@guid',
        'productDescription': '@guid',
        'earnedPoints|0-3': 0,
      }
    ]
  })


