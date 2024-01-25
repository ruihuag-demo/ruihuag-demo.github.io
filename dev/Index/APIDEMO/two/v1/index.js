const express = require('express')
let Mock = require('mockjs')
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
})



// TEST
{
  // GET
  {
    app.get('/get', (req, res)=>{
      res.send({
        code: '0',
        message: '成功',
        data : Mock.mock({
          'list|1-10' : [
            {
              'id|+1': 1
            }
          ]
        })
      })
    })
      // req.params
      {
        // 地址栏：/user/app ;
        // 这里 :name 对应 app
        app.get('/user/:name', function(req, res){
          var param = req.params.name;
          res.send('hello world' + param); // hello world app});
        })
    
        // 使用正则
        // 地址栏：localhost:3000/file/javascripts/jquery.js
        app.get('/file/*', function(req, res){
          var param = req.params[0];
          console.log(req.params)
          res.send(param); //javascripts/jquery.js
        })
      }

      // req.query
      {

        // 地址栏： /search?q=tobi+ferret
        app.get('/search', function(req, res){
          var param = req.query.q;
          res.send(param); //tobi ferret
        });
          // 地址栏： /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
        app.get('/shoes', function(req, res){
          var _order = req.query.order;
          var _color = req.query.shoe.color;
          var _type = req.query.shoe.type;
          console.log(_order);
          // desc
          console.log(_color); 
          // blue
          console.log(_type); 
          // converse
          res.send('hello world');
        });
        
      }

    app.get('/', (req, res)=>{
      res.send({
        msg: 'success',
        data : Mock.mock({
          'list|1-10' : [
            {
              'id|+1': 1
            }
          ]
        })
      })
    })

  }
  // POST
  {

     // req.body
     {
      app.post('/add',  function(req, res){
        var userObj = {};
        userObj = {
          name: req.body.name,
          age: req.body.age,
          job: req.body.job,
          hobby:req.body.hobby
        }
        console.log(userObj);
        res.send( userObj.name + '200')
      })
    }

    app.post('/postdemo', (req, res) => {
      console.log("req :" + req.body)
      console.log("res : " + res)
    })
  }
}








app.listen(8090, ()=> {
  console.log('listen to 8090')
})



