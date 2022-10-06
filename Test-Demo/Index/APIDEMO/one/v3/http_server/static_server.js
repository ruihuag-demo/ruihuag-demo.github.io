let http = require('http')

//创建server对象
let server = http.createServer();

let path = require('path')

let fs = require('fs')

server.on('request', (req,res)=>{
    let urlObj = path.parse(req.url)
    console.log(urlObj)

    if(req.url=="/"){
        res.setHeader('content-type','text/html;charset=utf-8')
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <!-- register.html -->
        <h1>注册页面</h1>
        <a href="/login"> 去登录 </a>
        <div>
            <form action="http://127.0.0.1:3000/login" method="POST">
                <p>
                    <label for="username">用户名</label>
                    <input type="text" id="username" name="username" placeholder="用户名">
                </p>
                <p>
                    <label for="password">密码 :</label>
                    <input type="text" id="password" name="pwd" placeholder="密码">
                </p>
                <p>
                    <input type="submit" value="注册">
                </p>
            </form>
        </div>
        
        </body>
        </html>
        
        `)
    }else if(urlObj.dir == '/static'){
        //设置响应头,告诉浏览器,返回的内容
        res.setHeader('content-type',getContentType(urlObj.ext));
        //读取文件给到浏览器
        let rs = fs.createReadStream('./static/'+urlObj.base)
        rs.pipe(res)
    }else{
        res.end("404");
    }
})


function getContentType(extName){
    switch(extName){
        case '.png':
            return 'image/png';break;
        case '.jpg':
            return 'image/jpg';break;
        case '.css':
            return 'text/css;charset=utf-8';break;
        case '.json':
            return 'text/json;charset=utf-8';break;
        case '.html':
            return 'text/html;charset=utf-8';break;
        case '.js':
            return 'text/javaScript;charset=utf-8';break;

    }
}


server.listen(3000,()=>{
    console.log('服务器启动,http://127.0.0.1:3000')
})
