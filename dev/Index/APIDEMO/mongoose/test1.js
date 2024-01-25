var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/test')//连接test数据库

// 给连接绑定成功或失败的提醒
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  // connected 成功连接
  
  // 定义schema (colection里面的结构)
  var blogSchema = new Schema({
    title:  String,
    author: String
  });
  
  blogSchema.methods.say = function(){
    console.log(this.title);
	}

  // 继承一个schema
  let Model = mongoose.model('Blog',blogSchema);
  
  // 生成 一个document
  let blog = new Model({
    title : 'mybolg',
    author: 'grh'
	})
	
	// 存放数据
	blog.save((err,apple)=>{
		if(err) return console.log(err);
		blog.say();
		Model.find({author: 'grh'},(err, data) => {
			console.log(data)
		})
	});
  
  

})