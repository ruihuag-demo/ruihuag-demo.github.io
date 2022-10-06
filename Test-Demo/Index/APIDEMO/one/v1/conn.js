//引入mongodb模块，获得客户端对象
var MongoClient = require('mongodb').MongoClient;
//连接字符串
var url = 'mongodb://localhost:27017/';    

var database = 'shop_testdb';

//插入一条数据 
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db(database);
//     var myobj = { 'name': "xyy2", 'pwd': "xyy2" };
//     dbo.collection("user").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });


//查看全部数据
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    dbo.collection("user"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});


export const del = () =>{
    MongoClient.connect(url,{ useNewUrlParser: true}, (err,db)=>{
        if(err) throw err;
        let dbo = db.db(database);
        let whereStr = {'name': 'guanruihua'};
        dbo.collection('user').deleteMany(whereStr, (err, obj)=>{
            if(err) throw err;
            console.log(obj.result.n+ `条文档被删除`);
            db.close();
        })
    })
}