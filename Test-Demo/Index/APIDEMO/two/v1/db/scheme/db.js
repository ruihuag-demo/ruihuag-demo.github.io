/**
 * 定义数据结构
 * 生成数据
 */

let Mock = require('mockjs')

module.exports.groupStore = 
  Mock.mock({
    'data|100' : [
      {
        "id": '@id',
        'cid|+1': 1,
        'name': '@name',
        'code': '@first',
        'status|0-1': 0,
      }
    ]
  })

module.exports.store = 
  Mock.mock({
    'data|500' : [
      {
        "id": '@id',
        'cid|+1': 1,
        'name': '@name',
        'code': '@first',
        'status|0-1': 0,
      }
    ]
  })

module.exports.rpAdjustmentReason = 
  Mock.mock({
    'data|100' : [
      {
        'id': '@id',
        'cid|+1': 1,
        'name': '@name',
        'code': '@first',
        'status｜0-1': 0,
        'description': '@paragraph',
      }
    ]
  })


