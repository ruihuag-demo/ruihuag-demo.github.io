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
        'name': {
          'en_US':'@name',
          'zh_CN':'@name',
          'zh_TW':'@name'
        },
        'code':  {
          'en_US': '@guid',
          'zh_CN': '@guid',
          'zh_TW': '@guid',
        },
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
        'name': {
          'en_US':'@name',
          'zh_CN':'@name',
          'zh_TW':'@name'
        },
        'code':  {
          'en_US': '@guid',
          'zh_CN': '@guid',
          'zh_TW': '@guid',
        },
        'status|0-1': 0,
      }
    ]
  })



module.exports.rpAdjustmentReason  = 
  Mock.mock({
    'data|30' : [
      {
        'id': '@id',
        'cid|+1': 1,
        'name': {
          'en_US':'@name',
          'zh_CN':'@name',
          'zh_TW':'@name'
        },
        'code':  {
          'en_US': '@guid',
          'zh_CN': '@guid',
          'zh_TW': '@guid',
        },
        'description':{
          'en_US': '@sentence(3, 5)',
          'zh_CN': '@sentence(3, 5)',
          'zh_TW': '@sentence(3, 5)'
        },
        'status|0-1': 0,
      }
    ]
  })


