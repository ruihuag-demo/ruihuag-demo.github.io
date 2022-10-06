let obj = function(a, b){
    this.a = a;
    this.b = b;
}

let obj2 = function(){
    this.a = 1;
    this.b = 2;
}
let myObj = new obj(1,2);
obj2.prototype.a = 3;
obj2.prototype.b = 5;
obj2.prototype.c = 10;
// console.log(obj)
// console.log(myObj.a)
// console.log(new obj2())
// console.log(new obj2().c);

//继承方法
var o = {
    a: 2,
    m: function(){
        return this.a + 1;
    }
}

// console.log(o.m())

var b = Object.create(o);
b.a = 4;
// console.log(b.m())

// function doSomething(){}
// console.log( doSomething.prototype)

function Father(){
	this.property = true;
}
Father.prototype.getFatherValue = function(){
	return this.property;
}
function Son(){
	this.sonProperty = false;
}
//继承 Father
Son.prototype = new Father();
//Son.prototype被重写,导致Son.prototype.constructor也一同被重写
Son.prototype.getSonVaule = function(){
	return this.sonProperty;
}
var instance = new Son();
console.log(instance.getFatherValue());//true
