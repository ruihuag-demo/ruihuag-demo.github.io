const child_process = require('child_process')
for(let i=0; i<3 ;i++){
    var workerProcess = child_process.exec('node process.js '+i,function(err,stdout, stderr){
        if(err){
            console.log(err)
        }else{
            console.log('stdout:'+stdout, 'stderr:'+stderr)
        }
    })
}