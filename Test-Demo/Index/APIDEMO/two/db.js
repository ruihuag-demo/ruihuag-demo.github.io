/**
 * 生成json文件, 模拟持久层
 */
const { dbName } = require('./utils/variable')
const Mock = require('mockjs')
const { groupStore, store, rpAdjustmentReason } = require('./db/scheme/db')
const { writeFileToData, manyToOne } = require('./utils/fn')
const { findDBMaxCid } = require('./utils/handle')

// groupStore Page 两个表
// groupStore和store 一对多的中间表
function groupStoreAndStoreInit(){
  writeFileToData(groupStore, './db/data/' + dbName.groupStore)
  writeFileToData(store, './db/data/' + dbName.store)
  writeFileToData( manyToOne(groupStore, store, 5), './db/data/' + dbName.groupStoreToStore)
}

// 生成 rp adjustment Reason 数据
function rpAdjustmentReasonInit(){
  let maxCid = findDBMaxCid(rpAdjustmentReason)
  // 添加一些特殊数据
  rpAdjustmentReason.data.push(
    Mock.mock({
      'id': '222300198904113655',
      'cid': ++maxCid,
      'name': {
        'en_US':'@name',
        'zh_CN':'@name',
        'zh_TW':'@name'
      },
      'code':  {
        'en_US': 'OTHERS',
        'zh_CN': 'OTHERS',
        'zh_TW': 'OTHERS',
      },
      'status|0-1': 0,
      'description': {
        'en_US': '@sentence(3, 5)',
        'zh_CN': '@sentence(3, 5)',
        'zh_TW': '@sentence(3, 5)',
      }
    })
  )
  
  writeFileToData(rpAdjustmentReason, './db/data/' + dbName.rpAdjustmentReason)
}

groupStoreAndStoreInit();
rpAdjustmentReasonInit();
