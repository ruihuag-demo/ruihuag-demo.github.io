function Father(){
    this.property = true;
}

Father.prototype.getFatherValue = function(){
    return this.property;
}

function Son(){
    this.sonProperty = false;
}

// 继承 Father
Son.prototype = new Father();
Son.prototype.getSonValue = function(){
    return this.sonProperty;
}

var instance = new Son();
console.log(instance.getFatherValue());
console.log(instance.getSonValue());

/* 
instance实例会现在自己的内部属性找一遍, 
=>instance.__proto__(Father)=>Father.prototype=>Object.prototype
 */ 

// 原型和实例的关系
 console.log('原型和实例的关系');
 console.log(instance instanceof Object);
 console.log(instance instanceof Father);
 console.log(instance instanceof Son);

 console.log(Object.prototype.isPrototypeOf(instance))
 console.log(Father.prototype.isPrototypeOf(instance))
 console.log(Son.prototype.isPrototypeOf(instance))

/* 
    问题:
        1. 当原型链中包含引用类型值的原型时, 该引用类型的值会被所有实例共享
        2. 在创建子类型(例如Son实例),不能向超类型(例如Father)的构造函数中传递参数
*/

console.log('租借构造函数(经典继承)');
function Father1(){
    this.colors = ['red', 'blue', 'green'];
}

function Son1(){
    Father1.call(this);//继承Father, 且向父属性传递参数
}

var instance1 = new Son1();
instance1.colors.push('black');
console.log(instance1.colors);//red, blue, green, black

var instance10 = new Son1();
console.log(instance10.colors);//red, blue, green  引用类型值是独立

/* 
    构造函数
        保证了原型链中引用类型值的独立, 不在被所有实例共享
        子类型创建时也能够向父类型传递参数
*/

console.log(`组合继承`)
/* 
    使用原型链实现对原型属性和方法的继承, 通过租用构造函数来实现对实例属性的继承
*/

function Father2(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Father2.prototype.sayName = function(){
    console.log(this.name)
}

function Son2(name, age){
    Father2.call(this, name);
    this.age = age;
}

Son2.prototype = new Father2();
Son2.prototype.sayAge = function(){
    console.log(this.age);
}

var instance2 = new Son2('grh', 18);
instance2.colors.push('black')
console.log(instance2.colors);
instance2.sayAge();
instance2.sayName();

console.log(`原型继承`)

function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
console.log(object());
var person = {
    friends : ['Van', 'Louis', 'Nick']
};
var anotherPersion = object(person);
anotherPersion.friends.push('Rob')
var yetAntherPerson = object(person);
yetAntherPerson.friends.push('Style');
console.log(person.friends);

console.log(`寄生式继承`)
console.log(`寄生组合式继承`)
console.log(`new 运算符`)
console.log(`__proto__属性是指定原型的关键`)

