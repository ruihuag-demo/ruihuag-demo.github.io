let fs = require('fs')

//删除非空文件夹

function delDir(dirPath){
    let filesArr = fs.readdirSync(dirPath);
    // for(let i in filesArr){
    //     let filePath = dirPath+'/'+filesArr[i];
    //     let filePathArr = filePath.split('/');
    //     console.log(filePathArr[filePathArr.length-1].split('.').length>1);
    //     if(!(filePathArr[filePathArr.length-1].split('.').length>1)){
    //         console.log('是文件夹')
    //     }else{
    //         console.log('不是文件夹')
    //     }
    //     // console.log(filePath);
    // }

    for(let i in filesArr){
        let filePath = dirPath+'/'+filesArr[i];

        let stat = fs.statSync(filePath);
        //判断是否是文件
        if(stat.isFile()){
            fs.unlinkSync(filePath)
        }else if(stat.isDirectory()){
            //递归调研自己
            delDir(filePath)
        }
    }
    fs.rmdirSync(dirPath)
}

delDir('./img');