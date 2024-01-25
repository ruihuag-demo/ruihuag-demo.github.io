{
  let a = {
    age: 1,
    name : 'grh',
  }
  let b = a
  a.age = 2
  b.name = 'rh'
  console.log(b.age) // 2  希望是1
  console.log(b.name) // rh  希望是grh
}

{
  console.log('浅拷贝');
  function shallowCopy(obj) {
    var temp = {};
    for( key in obj ) {
      if(obj.hasOwnProperty(key)){
        temp[key] = obj[key];
      }
    }
    return temp
  }
  let a = {
    age: 1,
    name : {
      first: 'grh'
    }
  }
  let b = shallowCopy(a)
  a.age = 2
  a.name.first = 'rh'
  console.log(b.age) // 1
  console.log(b.name.first); // rh 希望拿到的是grh
}

{
  console.log('深拷贝');
  function cloneDeep(source) {
    if(typeof source !== 'object' && source === null ) return source;
    var target = {};
    for( let key in source ) {
      if( Object.prototype.hasOwnProperty.call(source, key)) {
        if( typeof source[key] === 'object') {
          target[key] = cloneDeep(source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  let a = {
    age: 1,
    name : {
      first: 'grh'
    }
  }
  let b = cloneDeep(a)
  a.age = 2
  a.name.first = 'rh'
  console.log(b.age) // 1
  console.log(b.name.first); // grh 
}