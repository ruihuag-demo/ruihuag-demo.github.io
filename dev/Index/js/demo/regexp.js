const menuItemList =[
  { key : 1 , text : '查看'},
  { key : 2 , text : '修改'},
  { key : 3, text : '设置验证方式'},
  { key : 4, text : '新增批次'},
  { key : 5, text : '新增UAID'},
  { key : 6, text : '激活UAID'},
  { key : 7, text : '禁用UAID'},
  { key : 8, text : '重新激活UAID'},
  { key : 9, text : '绑定规则'},
  { key : 10, text : '链接管理'},
  { key : 11, text : '设置UAID URL前缀'},
  { key : 12, text : '设置标签'},
  { key : 12, text : '关联摄像头'},
  { key : 12, text : '重定向URL'},
]

let outList = [];
let temp = 'UAID'
let treg = '/' + temp + '/'
let reg = eval(treg)
let temp2 = ''
let regArr = {
  key : 8,
  text : 'UAID'
}
// console.log(reg);

let a = menuItemList
  .filter(item=>item.text.match(reg))
  .filter(item => item.text.match(eval(`/${temp2}/`)))
  .filter(item => item.key > 7)
// console.log(a);

// let b = menuItemList
// for( let index in regArr){
//   console.log( regArr[index])
//   b = b.filter( 
//      item => item.index.match( eval(`/${regArr[index]}/`) )
//     )  
// }
// console.log( b )

// console.log( a.filter( item => true))



let testData = [
  "96079325", //香港
  "53003510", //香港
  "13415364003", //大陆
  "63663046", //澳门
  "12312312", // 
  "49203940",
]

// let patternStr = /^[1][3-8]\d{9}$|^([0|2|5|6|9])\d{7}$|^[6]([8|6])\d{5}$|^(853)?(?:28\d{6}|6\d{7})$/
// let patternStr = /^[1][3-8]\d{9}$|^([0|2|5|6|9])\d{7}$|^[6]([8|6])\d{5}$|^(853)?(?:28\d{6}|6\d{7})$/
// [1][3-8]\d{9}$|^([6|9])\d{7}$|^[6]([8|6])\d{5}
let patternStr = /^[1][3-8]\d{9}$|^([2|3|5|6|8|9])\d{7}|^[6]([8|6])\d{5}$/ 
// let patternStr = /^[1][3-8]\d{9}$/
// |^([0|2|5|6|9])\d{7}$|^[6]([8|6])\d{5}$|^(853)?(?:28\d{6}|6\d{7})$/

// testData.map( item =>{
//   console.log(item.match(patternStr))
// })


{
  let str = "20001";
  console.log( str.split('')[0] === '2')
}