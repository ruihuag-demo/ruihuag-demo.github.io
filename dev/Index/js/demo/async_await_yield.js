const A = () => console.log('a')
const B = () => console.log('b')


async function asyncFn() {
  console.log('start')
  await A();
  await new Promise( resolve => {
    console.log('wait result');
    resolve();
  })

  const data = await new Promise( resolve => resolve(1) )
  console.log(data) // 1
  await B();
  console.log('end')
}

// asyncFn();

function * yieldFunc() {
  console.log('start')
  yield A();
  const data = yield new Promise( resolve => resolve(1))
  console.log(data)
  yield B();
  console.log('end')
}

function runYieldFunc() {
  let yieldFn = yieldFunc();
  
  yieldFn.next();
  const dp = yieldFn.next();
  console.log( dp )
  dp.value.then( data => {
    console.log( data ) // 在最后输出 1
  })
  yieldFn.next();
  yieldFn.next();
}

runYieldFunc(); 