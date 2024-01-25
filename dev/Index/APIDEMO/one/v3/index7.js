let fs = require('fs')

//删除文件

fs.unlink('logo3.png', err=>{
    if(err){
        console.log(err);
    }else{
        console.log("delete success")
    }
})


//读取目录下的所有文件

fs.readdir('./',(err,files)=>{
    if(err){
        console.log(err)
    }else{
        console.log(files)
    }
})