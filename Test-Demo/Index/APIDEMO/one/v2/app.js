// app.js

var mongoose = require('mongoose');            
var url = 'mongodb://localhost:27017/';   
var database = 'shop_testdb'; 
mongoose.connect(url+database)     //连接本地数据库shop_testdb

var db = mongoose.connection;
var express = require('express')
var app = express() 
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// 连接成功
db.on('open', function(){
    console.log('MongoDB Connection Successed');
});
// 连接失败
db.on('error', function(){
    console.log('MongoDB Connection Error');
});


var express = require('express');
var router = express.Router();
var User = require('./user');



router.post('/register', function (req, res) {

    // 获取用户提交的信息
    var postData = {
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        address: req.body.address
    };

    console.log(postData);
    

    // 查询是否被注册
    // User.findOne({username: postData.username}, function (err, data) {
    //     if (data) {
    //         res.send('用户名已被注册');
    //     } else {
    //         // 保存到数据库
    //         User.create(postData, function (err, data) {
    //             if (err) throw err;
    //             console.log('注册成功');
    //             res.redirect('/userList');      // 重定向到所用用户列表
    //         })
    //     }
    // });
});

app.listen(3000);