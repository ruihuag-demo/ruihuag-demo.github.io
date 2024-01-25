let fs = require('fs')

//非阻塞态执行
// 异步执行
fs.open('text2.txt', 'w', (err,fd)=>{
    fs.writeFile(fd, 'guanruihua nb!',(err)=>{
        if(!err){
            console.log("写入完成!")
            fs.close(fd,()=>{
                console.log("文件关闭完成")
            })

        }else{
            console.log(err)
        }
    })
})

console.log('执行') 