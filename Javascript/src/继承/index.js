// 定义一个动物类
function Animal(name) {
	// 属性
	this.name = name || 'Animal';
	// 实例方法
	this.sleep = function () {
		console.log(this.name + '正在睡觉！');
	}
}
console.log(new Animal())

function Cat(name) {
	Animal.call(this);
	this.name = name || 'Tom';
}
(function () {
	// 创建一个没有实例方法的类
	let Super = function () { };
	Super.prototype = Animal.prototype;
	//将实例作为子类的原型
	Cat.prototype = new Super();
})();

// Test Code
var cat = new Cat('test cat');
console.log(cat.name);
cat.sleep()
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true感谢 @bluedrink 提醒，该实现没有修复constructor。Cat.prototype.constructor = Cat; // 需要修复下构造函数
