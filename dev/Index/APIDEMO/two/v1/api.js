const Mock = require('mockjs')
const { dbName } = require('./utils/variable')
const rpAdjustmentReason = require('./db/data/t_cds_reward_rpAdjustmentReason.json')
const { addOne, selectOne, deleteOne, updateOne, separateQuery } = require('./utils/handle')



// 方法调试
{
  let data = rpAdjustmentReason
  let url = './db/data/' + dbName.rpAdjustmentReason
  // 添加一组数据
  // addOne( rpAdjustmentReason, {
  //   name : 'grh',
  //   code : Mock.mock('@first'),
  //   status: 0,
  //   description:Mock.mock('@paragraph')
  // }, './db/data/' + dbName.rpAdjustmentReason);
  
  // 添加多组数据
  // addMany( data, [], url)

  // 查询一组数据
  // const item = selectOne( rpAdjustmentReason, '140000199202192576');
  // console.log( item );

  // 过滤查询 ( 过滤先不再处理分页 )
  // fliterSelect( data, {}) 

  // 删除一组数据
  // deleteOne( rpAdjustmentReason, '140000199202192576', './db/data/' + dbName.rpAdjustmentReason );
  
  // 删除多组数据 
  // deleteMany( data, idList = [], url)
  

  // 更新一组数据
  // updateOne( rpAdjustmentReason, {
  //   "id": "220000198907203314",
  //   "cid": 1,
  //   "name": "Deborah Martin Grh",
  //   "code": "Kimberly",
  //   "status｜0-1": 0,
  //   "description": "Cstlrqj ehlxlreiox wzcu ynxwusu umzecyqqu cwlppcchfl idkhnv ubfbr vxjqomkn ccepa dggylnsl ptfnhxl. Ecn hfgi sdtk hleays mhcywfjq ghs fyctyi iyjl ummrhmju chsnwe bdvqjpiqf oadckhgpf nblt ipwduxurm. Vcw whjw mggyblxoj ulgh pfqfiwbvbo zbfkon llywf dqzp xbhxg nhcej ofllbf nxn lflsh. Merrdcisp akvlyv jvqkbtkn fyigwnmct gkeamhgx kttkzf iyaxowt mqyivh isn otiffuu jggbpdqo iggid xmifgd qtqyst bnfd. Tvmrzj rpmtvo rakvu slovth rxorhgrdb nsckjc zkz moxfth nerypnbix marhglnuq rlyb qwhr htjsvfy rockemf dfwyd odsexazf bpsvobpro. Rlb fasuhfnyb pdxicq huzfyq kdyldjcybj unvia eopyvh mpfsojkfuq slxnltbvm jobq htvtv vdhiu uxof onudotx. Iflm ffdk segdciri pqfz jbuhyx csm ttbfahbo wuqdjk tsh srylr hoy kxbugye uqxreyhhbo gugirng."
  // }, './db/data/' + dbName.rpAdjustmentReason);

  // 更新多组数据
  // updataMany( data, [], url)


  // 分业查询
  // const separateQueryData = separateQuery( rpAdjustmentReason, 10, 1) 
  // console.log( separateQueryData )
}