// js 对象
let obj = {
  a : '1',
  b : '2',
  c : 'string', 
  d : true,
  e : 123,
}

// json 对象
let obj2 = {
  'name' :'grh',
  'sex' : 'man',
}

console.log(obj.a, obj2['name'])


console.log(JSON.stringify(obj)) // js 对象转换为json对象
console.log(JSON.parse(JSON.stringify(obj))); // json对象转换为js对象