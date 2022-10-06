// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
const person = {
	isHuman: false,
	printIntroduction: function () {
		console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
	}
};

const me = Object.create(person);

me.name = 'Ruihuag'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
console.log(person)

// ------继承------


// Shape - 父类(superclass)
function Shape() {
	this.x = 0;
	this.y = 0;
}

// 父类的方法
Shape.prototype.move = function (x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
	Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
	rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
	rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'