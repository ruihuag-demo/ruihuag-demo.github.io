// Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。

Object.appendChain = function (oChain, oProto) {
	if (arguments.length < 2) {
		throw new TypeError('Object.appendChain - Not enough arguments');
	}
	if (typeof oProto === 'number' || typeof oProto === 'boolean') {
		throw new TypeError('second argument to Object.appendChain must be an object or a string');
	}

	var oNewProto = oProto,
		oReturn,
		o2nd,
		oLast;

	oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

	for (var o1st = this.getPrototypeOf(o2nd);
		o1st !== Object.prototype && o1st !== Function.prototype;
		o1st = this.getPrototypeOf(o2nd)
	) {
		o2nd = o1st;
	}

	if (oProto.constructor === String) {
		oNewProto = Function.prototype;
		oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
		this.setPrototypeOf(oReturn, oLast);
	}

	this.setPrototypeOf(o2nd, oNewProto);
	return oReturn;
}

//=========================================

function Mammal() {
	this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
	this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal);
// 'yes'

function Animal() {
	this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing);
// 'yes'

//=========================================


function Symbol() {
	this.isSymbol = 'yes';
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new Symbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'


//=========================================
function Person(sName) {
	this.identity = sName;
}

var george = Object.appendChain(new Person('George'), 'console.log("Hello guys!!");');

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'