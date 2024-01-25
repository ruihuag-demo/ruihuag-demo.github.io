let event = require('events');
const { log } = require('console');

//创建事件对象
var eventLog = new event.EventEmitter();

//监听事件
eventLog.on('myevent',function(msg){
    console.log('触发');
    console.log(msg);
})

eventLog.on('myevent',function(msg){
    console.log('触发2');
    console.log(msg);
})

eventLog.on('myevent',function(msg){
    console.log('触发3');
    console.log(msg);
})

//触发事件
eventLog.emit('myevent',"grh");
console.log('over');