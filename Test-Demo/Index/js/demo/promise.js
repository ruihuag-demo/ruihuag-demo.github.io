/* var _promiseObj = new Promise((reslove, reject)=>{
    console.log('aaa');
});

console.log(_promiseObj.__proto__);
console.log(_promiseObj.__proto__.__proto__);
console.log(_promiseObj.__proto__.then);
console.log(_promiseObj.__proto__.constructor); */


/* var pro = new Promise((reslove, reject)=>{
    console.log('running...');
    if(Math.random()*10 > 1){
        reslove(1);
    }
    reject(0);
});
pro
.then((data)=>{
    console.log(data, 'success')
    return 111;
},(err)=>{
    console.log(err, 'error');
})
.then(data=>{
    console.log(data)
},err=>{
    console.error(err)
}); */

/* 
let promises = [1, 2, 3].map((item)=>{
    return new Promise((resolove,reject)=>{
        resolove(item * 2)
    })
})
Promise
    .all(promises).then(data=>{
        console.log(data)
    } ,err=>{
        console.log(err)
    }).catch(err=>{
        console.err(err)
    });


let promises2 = [3, 1, 2].map((item,index)=>{
    return new Promise((resolve,reject)=>{
        setTimeout( resolve , item*15, `p${index+1} running`)
    })
})

Promise.race(promises2).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

Promise.resolve(1).then(data=>{
    console.log(this,data)
})
 */
Promise.reject(2).then(()=>{},data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
}).then(data=>{
    console.log('状态: fulfilled');
})

