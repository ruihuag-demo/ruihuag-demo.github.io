const Mock = require('mockjs')

const { findDataMaxCid } = require('../utils/handle')
let rewardGroupStore = require('../db/data/t_cds_reward_group_store.json')
let rewardStore = require('../db/data/t_cds_reward_store.json')
let mid = require('../db/data/t_cds_groupStore_to_store_mid.json')


console.log(rewardGroupStore.data[0])
console.log(mid.data[0])
console.log(rewardStore.data[0])

/**
 * apiRewards/redemptionGroup/save
 * post
 * 新增/修改兑换点组
 * isNewRecord true: 新增, false修改
 * code 唯一
 */

function save(params) {
  let { isNewRecord, code, name, status, storeList } = params;
  if( isNewRecord ){
    let rewardGroupStoreId = Mock.mock('@id')
    // 新增
    // 兑换组
    rewardGroupStore.data.push({
      id: rewardGroupStoreId,
      cid: ++findDataMaxCid(rewardGroupStore.data),
      name: {
        en_US: name,
        zh_CN: name,
        zh_TW: name,
      },
      code: {
        en_US: code,
        zh_TW: code,
        zh_TW: code,
      },
      status: status,
    })
    // 中间表
    mid.data.push({
      cid: ++findDataMaxCid(mid.data),
      groupId: rewardGroupStoreId,
      itemIdList: () => storeList.map( item => item.id )
    })
  }else{
    // 修改
    // 有歧义晚点再做
  }

  return {
    code: '0',
    message: '成功',
    data: {

    }
  }
}






/**
 * apiRewards/redemptionGroup/remove
 * POST
 * - groupId 兑换组(文档没有)
 * groupIds 兑换点组列表
 */

function remove( params ) {
  let { groupId, groupIds } = params;
  mid.data.map( item => {
    if( item.groupId === groupId ){
      item.itemIdList.filter( item => {
        for(let i=0; i< groupIds.length; i++){
          if(item === groupIds[i]) return false
        }
        return ltrue;
      })
    }
    return item
  })
  return {
    code: '0',
    message: '成功',
    data: {

    }
  }
}

/**
 * apiRewards/redemptionGroup/removeAllStores
 * POST 
 * 移除选择的兑换点组
 * groupId 
 */

function removeAllStores(params) {
  let { groupId } = params;
  rewardGroupStore.data = rewardGroupStore.data.filter( item => item.id !== groupId)
  mid.data = mid.data.fill( item => item.id !== groupId )
  return {
    code: '0',
    message: '成功',
    data: {

    }
  }
}

/**
 * 有歧义
 * apiRewards/redemptionGroup/get
 * POST
 * 查询兑换点组列表
 * redemptionGroup实体 {
 *  id: 
 *  code:
 *  name:
 *  status: 
 *  storeList: 兑换点详情列表
 * }
 */

function get(params) {
  // let { code, name, status } = params;
  // let rewardGroupStoreId = rewardGroupStore.data.filter( item => item.code === code).id
  // mid.data.filter( item => item.id === rewardGroupStoreId)
  return {
    code: '0',
    message: '成功',
    data: [ // redemptionGroup实体

    ]


  }
}

/**
 * apiRewards/redemptionGroup/getDetail
 * POST,GET
 * 查询兑换点组详情
 */
function getDetail(params) {
  let { id } = params;

  return {
    code: '0',
    message: '成功',
    data: {

    }
  }
}
