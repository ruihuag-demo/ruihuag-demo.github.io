function Dog(name) {
    this.name = name;
}
Dog.prototype.bark = function () {
    console.log('wangwang');
}
Dog.prototype.sayName = function () {
    console.log('my name is ' + this.name);
}
//==========重写开始
function _new(Func, ...args) {
    let obj = Object.create(Func.prototype);
    let result = Func.call(obj, ...args);
    if (result !== null && /^(object|function)$/.test(typeof result)) return result;
    return obj;
}
//==========重写结束
let sanmao = _new(Dog, '三毛');
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true 