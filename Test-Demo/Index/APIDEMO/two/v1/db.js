/**
 * 生成json文件, 模拟持久层
 */
const { dbName } = require('../utils/variable')
const { groupStore, store, rpAdjustmentReason } = require('../db/scheme/db')
const { writeFileToData, manyToOne } = require('../utils/fn')

// groupStore Page 两个表
// groupStore和store 一对多的中间表
{
  writeFileToData(groupStore, './db/data/' + dbName.groupStore)
  writeFileToData(store, './db/data/' + dbName.store)
  writeFileToData( manyToOne(groupStore, store, 5), './db/data/' + dbName.groupStoreToStore)
}

// 生成 rp adjustment Reason 数据
{
  writeFileToData(rpAdjustmentReason, './db/data/' + dbName.rpAdjustmentReason)
}
