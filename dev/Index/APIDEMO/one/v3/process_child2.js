const child_process = require('child_process')
const { worker } = require('cluster')
for(let i=0; i<3 ;i++){
    var workerProcess = child_process.spawn('node', ['process.js',i])
    workerProcess.stdout.on('data', function(data){
        console.log('data: '+data)
    })
    workerProcess.stderr.on('data', function(data){
        console.log('err: '+data)
    })
    workerProcess.on('close', function(code){
        console.log('子进程已退出,退出码:' +code)
    })
}