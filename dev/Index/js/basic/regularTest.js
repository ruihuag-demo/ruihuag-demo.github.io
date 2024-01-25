let strArr = [
  { data: "abc" },
  { data: "123" },
  { data: "def" },
  { data: "1" },
  { data: "1." },
  { data: '2.0' },
  { data: "abc123def" },
  { data: "abc123def" },
  { data: "abc123def" },
  { data: "abc123def" },
  { data: "abc123def" },
]

let pat= {
  test: /[0-9]+/, 
  test1: /[0-9]/,
  test2: /^[0-9]+$/,
  test3: /^[0-9]?$/,
  test4: /^[0-9]{0,2}$/,
};

strArr.map( ( item, index )=> {
  console.log("-------------------------------")
  console.log(  index + ' ' + item.data  )
  console.log( item.data.match( pat.test2 ) )  
  console.log( item.data.match( pat.test3 ) )  
  console.log( item.data.match( pat.test4 ) )  
  console.log("-------------------------------")
})



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
  // console.log( regArr[index])
  // b = b.filter( 
     // item => item.index.match( eval(`/${regArr[index]}/`) )
    // )  
// }
// console.log( b )

// console.log( a.filter( item => true))
