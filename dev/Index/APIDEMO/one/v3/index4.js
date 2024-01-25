let fs = require('fs')

//异步读取文件
fs.readFile('text2.txt',(err,data)=>{
    if(!err){
        console.log(data)
        console.log(data.toString())
    }else{
        console.log('err',err);
    }
})

console.log('数据读取')