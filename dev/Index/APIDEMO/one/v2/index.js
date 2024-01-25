
var express = require('express');
var router = express.Router();
var User = require('./users');

router.get('/login', function (req, res) {
    res.render('login');
});
router.get('/register', function (req, res) {
    res.render('register');
});

// 这里的业务逻辑将写在 两个post 路由里 
router.post('/login', function (req, res) {
    var postData = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne({
        username: postData.username,
        password: postData.password
    }, function (err, data) {
        if(err) throw err;
        if(data){
            res.send('登录成功');
        }else{
            res.send('账号或密码错误')
        }
    } )
});

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

// 获取所有用户列表
router.get('/userList', function (req, res) {
    var userList = User.find({}, function (err, data) {
        if (err) throw  err;
        res.send(data)
    });
});