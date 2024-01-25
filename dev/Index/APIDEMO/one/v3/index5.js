let fs = require('fs')

//异步读取文件
fs.readFile('logo.png',(err,data)=>{
    if(!err){
        console.log(data)
        console.log(data.toString())
        fs.writeFile('logo2.png', data, (err, data)=>{
            if(!err){
                // console.log(data)
                console.log("图片读取写入成功")
            }else{
                console.log('err',err)
            }
        })

    }else{
        console.log('err',err);
    }
})

console.log('数据读取')