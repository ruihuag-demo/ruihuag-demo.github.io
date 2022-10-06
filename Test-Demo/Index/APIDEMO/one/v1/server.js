//server.js
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';    
var database = 'shop_testdb';

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
  });
  
 

// 添加用户
const insertOneUser = (name=null,pwd=null)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        if(name===null||name===''||pwd===null||pwd===''){
            console.log("文档插入失败");
        }else{
            var myobj = {'name': name, 'pwd': pwd };
            dbo.collection("user").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
        }     
    });
}

//添加一个货物
const insertOneGoods = (name=null, price=null)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        if(name===null||name===''||price===null||price===''){
            console.log("文档插入失败");
        }else{
            var myobj = {'name': name, 'price': pwd };
            dbo.collection("goods").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
        }     
    });
}

//删除一个货物
const delOneGoods = (name=null, price=null)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        if(name===null||name===''||pwd===null||pwd===''){
            console.log("文档插入失败");
        }else{
            var myobj = {'name': name, 'pwd': pwd };
            dbo.collection("user").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
        }     
    });
}

//注销一个用户
const delOneUser = (name=null)=>{
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        if(name===null||name===''||pwd===null||pwd===''){
            console.log("文档插入失败");
        }else{
            var whereStr = {'name': name};
            dbo.collection("user").deleteOne(whereStr, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
        }     
    });   
}

//查询

const selectUser = (name=null)=>{
    return new Promise((resolve, reject)=>{
        MongoClient.connect(url, { useNewUrlParser : true }, (err, db)=>{
            if(err) throw err;
            let dbo = db.db(database);
            let whereStr = {'name': name};
            dbo.collection('user').findOne(whereStr, (err, result)=>{
                if(err) throw err;
                // console.log(result);  
                if(result.username!==''||result.username!==null) {
                    loginFlag = true; 
                    resolve(loginFlag);
                }
                db.close();
                return result;
            })
        })
    })
    
}

// const del = () =>{
//     MongoClient.connect(url,{ useNewUrlParser: true}, (err,db)=>{
//         if(err) throw err;
//         let dbo = db.db(database);
//         let whereStr = {'name': ''};
//         dbo.collection('user').deleteMany(whereStr, (err, obj)=>{
//             if(err) throw err;
//             console.log(obj.result.n+ `条文档被删除`);
//             db.close();
//         })
//     })
// }

//post=>body   get=>query
//注册一个用户
app.post('/user',function(req, res){ 
    res.send('welcome, ' + req.body.username + req.body.pwd);
})
//登录
app.post('/login',function(req, res){    
    let outStr = selectUser(req.body.username) ? '登录成功':'登录失败';
    selectUser(req.body.username).then(result=>console.log(result));
    res.send(`${outStr} ` + req.body.username + req.body.pwd);
})

//注销用户
app.post('/user',function(req, res){
    // res.send('welcome, ' + req.query.username + req.query.pwd);
    res.send('welcome, ' + req.body.username + req.body.pwd);
    // insertOneUser(req.query.username , req.query.pwd);
})

//添加一个货物
app.post('/user',function(req, res){
    // res.send('welcome, ' + req.query.username + req.query.pwd);
    res.send('welcome, ' + req.body.username + req.body.pwd);
    // insertOneUser(req.query.username , req.query.pwd);
})

//删除一个货物
app.post('/user',function(req, res){
    // res.send('welcome, ' + req.query.username + req.query.pwd);
    res.send('welcome, ' + req.body.username + req.body.pwd);
    // insertOneUser(req.query.username , req.query.pwd);
})

app.post('/user',function(req, res){
    // res.send('welcome, ' + req.query.username + req.query.pwd);
    res.send('welcome, ' + req.body.username + req.body.pwd);
    // insertOneUser(req.query.username , req.query.pwd);
})




app.listen(3000,()=>{
    console.log('running...');  
});