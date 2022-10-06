let _ = require('lodash')
let arrayObj = ['a','b','c','d']
let arrayObj2 = [1, 2, 3, 4 ]

let runArray = [
() =>　{
    // 1. chunk(array, [size=1]) 
    // 将数组拆分成多个size的区块, 并将这些区块组成一个新的数组
    console.log(_.chunk( arrayObj, 2));
    console.log(_.chunk( arrayObj, 3));
},
() => {
    // 2. compack( array ) 
    // 创建一个新的数组, 包含原数组所有的非假值元素, 假元素: false, null, 0, '', undefined, NaN
    console.log(_.compact([0, 1, false, 2, '', 3]))// [1, 2, 3]
},

() => {

    // 3. concat( array, [values])
    // 将array与任何数组 或 值连接在一起
    let array = [1]
    let other = _.concat(array, 2, [3], [[4]], arrayObj2)
    console.log( other )
},
() => {
    // 4. difference(array, [values])
    // 创建一个唯一array值的数组
    // array: 要检查的数组
    // [value]: 排除的值
    console.log(_.difference([3, 2, 1 ], [4, 2]))
},
() => {
    // differenceBy( array, [values], [iteratee=_.identity])
    // array: 要检查的数组
    // [vlaue]: 排除的值
    // [iteratee= _.identity] : (array | function | object | string).iteratee 调用每个元素
    console.log( _.differenceBy([3.1, 2.2, 4.4], [4.4], Math.floor ));
    // console.log( _.differenceBy([3.1, 2.2, 4.4], [4.4], a => a+1 ));
    console.log( _.differenceBy([{ 'x':　2,}, { 'x': 3}], [{ 'x': 3}], 'x'))
},
() => {
    /**
     *  
     */   
}

];

console.log( runArray[runArray.length-1]() )