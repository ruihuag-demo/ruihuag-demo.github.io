/**
 * 生成json文件, 模拟持久层
 */
const Mock = require('mockjs')
const Data = require('./db/scheme/db')
const { writeFileToData, manyToOne } = require('./utils/fn')
const { findDBMaxCid } = require('./utils/handle')

Object.getOwnPropertyNames(Data).forEach( index => {
    writeFileToData(Data[index], './db/data/'+index);
});
