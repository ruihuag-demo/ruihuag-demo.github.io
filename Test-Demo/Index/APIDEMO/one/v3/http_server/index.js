let http = require('http');

let server = http.createServer();

//服务器监听请求数据
server.on('request', (req,res)=>{
    console.log(req.url);
    if(req.url=='/'){
        res.end('index')
    }else if(req.url == '/login'){
        res.end('login page')
    }else{
        res.end('404 not found')
    }
})

//绑定监听的端口
server.listen(3000, ()=>{
    console.log('服务器启动',"http://127.0.0.1:3000");
})