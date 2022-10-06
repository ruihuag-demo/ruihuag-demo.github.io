let _ = require('lodash')
const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

let runArray = [
  () => [
    // 强制转换为数组
    _.castArray(1),
    // => [1]
    _.castArray({ 'a': 1 }),
    // => [{ 'a': 1 }]
    _.castArray('abc'),
    // => ['abc']
    _.castArray(null),
    // => [null]
    _.castArray(undefined),
    // => [undefined]
    _.castArray(),
    // => []
  ],
  () => [
    (()=>{
      // 浅拷贝
      let objects = [{ 'a': 1 }, { 'b': 2 }];
      let shallow = _.clone(objects);
      console.log(shallow[0] === objects[0]);
      // => true

    })(),
    (()=>{
      // 深拷贝
      let objects = [{ 'a': 1 }, { 'b': 2 }];
      let deep = _.cloneDeep(objects);
      console.log(objects[0] === deep[0]);
      console.log( deep );
      console.log( objects[0]['a'] === deep[0]['a']);
      // => false
    })(),
  ],
  ()=>[
    // eq 比较两者是否相等
    (()=>{
      let object = { 'a': 1 };
      let other = { 'a': 1 };
      console.log( _.eq(object, object) );
      // => true
      console.log( _.eq(object, other) );
      // => false
     
    })(),
    _.eq('a', 'a'),
    // => true
    _.eq('a', Object('a')),
    // => false
    _.eq(NaN, NaN),
    // => true
  ],
  () => [
    // 大于
    _.gt(3, 1),
    _.gt(3, 3),
    _.gt(1, 3), 
  ],
  () => [
    // 大于或等于
    _.gte(3, 1),
    _.gte(3, 3),
    _.gte(1, 3),
  ],
  () => [
    // 判断是否为一个类arguments对象
    _.isArguments(function() { return arguments; }()),
    // => true
    _.isArguments([1, 2, 3]),
    // => false
  ],
  () => [
    // 是否为array
    _.isArray([1, 2, 3]),
    // => true
    _.isArray(document.body.children),
    // => false
    _.isArray('abc'),
    // => false
    _.isArray(_.noop),
    // => false

  ]

]

runArray[runArray.length - 1]().map(item => item !== undefined ? console.log(item) : '') 