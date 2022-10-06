const object1 = {};

Object.defineProperty(object1, 'property1', {
	value: 42,
	// writable: true,
	enumerable: true,
	// configurable: true, // true 才可以删除s
});

// writable : true, 可重写
object1.property1 = 77;

// configurable: true , 可删除
delete object1.property1

// enumerable 枚举
for (let key in object1) {
	console.log(key, object1[key])
}
console.log(object1.property1);


function Archiver() {
	let temperature = null;
	let archive = [];

	Object.defineProperty(this, 'temperature', {
		get: function () {
			console.log('get!');
			return temperature;
		},
		set: function (value) {
			temperature = value;
			archive.push({ val: temperature });
		}
	});

	this.getArchive = function () { return archive; };
}

var arc = new Archiver();
console.log(arc.temperature); // 'get!'
arc.temperature = 11;
arc.temperature = 13;
console.log(arc.getArchive()) // [{ val: 11 }, { val: 13 }]