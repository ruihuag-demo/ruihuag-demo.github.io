let fs = require('fs')

let rs = fs.createReadStream('logo.png');
let ws = fs.createWriteStream('logo3.png');

// rs.once('open', function(){
//     console.log("监听读取流");
// })

// rs.once('close', function(){
//     console.log("读取流关闭");
// })

// ws.once('open', function(){
//     console.log("监听写入流");
// })

// ws.once('close', function(){
//     console.log("写入流关闭");
// })

// //将读取的数据通过写入流写入
// rs.on('data', (data)=>{
//     ws.write(data)
// })


//简写版
//创建管道,将读取流通过管道流出
rs.pipe(ws);