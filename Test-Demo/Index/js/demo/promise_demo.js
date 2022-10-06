const fetch = require('node-fetch')
// const promise = new Promise(function(resolve, reject) {
//   resolve(111)
// }).then(data=>{
//   console.log(data)
// });

// fetch('localhost:8081').then(function(res){
//   return res.json();
// }).then(function(data){
//   console.log(data)
// }) 

// fetch('http://localhost:8081/')
// fetch('http://localhost:8081/')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });
let result = fetch('http://localhost:8090/')
console.log(result)
// result.then(res=>{
//   console.log(res)
//   res.json();
// }).then(data=> {
//   console.log(data)
// })

let _result = null;
result.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  _result = myJson;
  console.log(myJson);
});
// setInterval(()=>{
//   console.log(_result)
// },3000)