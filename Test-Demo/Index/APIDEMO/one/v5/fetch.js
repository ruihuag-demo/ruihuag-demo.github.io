const fetch = require('node-fetch')

// 处理异步请求的问题
async function asyncFunction () {
  console.log('start')
  const data = await fetch('http://localhost:8090/').then(res => res.json()).then(data => data);
  console.log(data)
  console.log('end')
}
asyncFunction();
