// 正常函数
function add(x, y) {
  return x + y;
}
// Currying后
function curryingAdd(x) {
  return function(y) {
    return x + y;
  }
}

console.log(
  add(1, 2),// 3
  curryingAdd(1)(2),// 3
);

// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
  return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
  return function(txt) {
      return reg.test(txt)
  }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)
console.log(
  hasNumber('test1')   ,   // true
  hasNumber('testtest') ,  // false
  hasLetter('21212')     , // false
)

// 常见写法
var on = function(element, event, handler) {
  if (document.addEventListener) {
      if (element && event && handler) {
          element.addEventListener(event, handler, false);
      }
  } else {
      if (element && event && handler) {
          element.attachEvent('on' + event, handler);
      }
  }
}

// 自然执行, 返回一个新的函数, 就可以提前确认好要运行那种方法, 避免每次都进行判断
// var on = (function() {
//   if (document.addEventListener) {
//       return function(element, event, handler) {
//           if (element && event && handler) {
//               element.addEventListener(event, handler, false);
//           }
//       };
//   } else {
//       return function(element, event, handler) {
//           if (element && event && handler) {
//               element.attachEvent('on' + event, handler);
//           }
//       };
//   }
// })();

//换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
var on = function(isSupport, element, event, handler) {
  isSupport = isSupport || document.addEventListener;
  if (isSupport) {
      return element.addEventListener(event, handler, false);
  } else {
      return element.attachEvent('on' + event, handler);
  }
}

// 延迟执行
Function.prototype.bind = function (context) {
  var _this = this
  var args = Array.prototype.slice.call(arguments, 1)

  return function() {
      return _this.apply(context, args)
  }
}


console.log('--------');

function add2() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function() {
      _args.push(...arguments);
      return _adder;
  };
  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
      // console.log(_args);
      return _args.reduce(function (a, b) {
          return a + b;
      });
  }
  return _adder;
}

let add2a = add2(1)(2)(3).toString()
let add2b = add2(1, 2, 3).toString()
console.log(add2a, add2b);

// console.log(
//   add2(1)(2)(3),
//   add2(1, 2, 3)(4) , 
// );

console.log('------');
function fn() {
  let _args = [];
  _args.push(...arguments)
  console.log(...arguments)
  var _fner = function() {
    console.log(...arguments);
    _args.push(...arguments)
    return _fner;
  }
  _fner.showData = function () {
    return _args
  }
  return _fner;
}

console.log(fn(1)(2).showData());