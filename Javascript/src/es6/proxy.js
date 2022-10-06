{
  let tartget = {}
  let proxy = new Proxy(tartget, {})
  proxy.name = 'proxy'
  console.log(proxy.name) // proxy
  console.log(tartget.name) // proxy

  tartget.name = 'tartget'
  console.log(proxy.name) // target
  console.log(tartget.name) // target
}
console.log('-----------------------------------------')
{
  let target = {
    name: 'target'
  }
  let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {
      //忽略不希望受到影响的已有属性
      if (!trapTarget.hasOwnProperty(key)) {
        if (isNaN(value)) {
          console.log('属性必须是数字哟，亲！')
          // throw new TypeError('属性必须是数字哟，亲！')
        }
      }
      // 添加属性
      return Reflect.set(trapTarget, key, value, receiver)
    }
  })

  // 添加一个新属性
  proxy.count = 1
  console.log(proxy.count) // 1
  console.log(proxy.count) // 1

  // 由于目标已有name属性，so 如上第一个if不成立(赋值成功)
  proxy.name = 'proxy'
  console.log(proxy.name) // proxy
  console.log(proxy.name) // proxy

  // 新建一个属性同时赋值一个非int 值，第一个if成立，第二个 if 验证isNaN(key) = true 即抛出异常
  proxy.anotherName = 'proxy'
}
