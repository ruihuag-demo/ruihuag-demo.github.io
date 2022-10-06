const run = [
	() => {
		function Animal(name) {
			this.name = name;
			this.showName = function () {
				console.log(this.name);
			}
		}
		function Cat(name) {
			Animal.call(this, name);
		}
		var cat = new Cat("Black Cat");
		cat.showName(); //Black Cat
	},
	() => {
		(function () {
			Array.prototype.push.call(arguments, '王五');
			console.log(arguments);//['张三','李四','王五']
		})('张三', '李四')
	},
	() => {
		let arr1 = [1, 2, 3];
		let arr2 = [4, 5, 6];
		Array.prototype.push.apply(arr1, arr2); //将arr2合并到了arr1中
		console.log('max:', Math.max.apply(null, arr1));
		console.log('arr1:', arr1);
		console.log('type:', Object.prototype.toString.call({}));
		console.log('type:', Object.prototype.toString.call(arr1));
	},
	() => {
		let foo = {
			name: "张三",
			logName: function (age) {
				console.log(this.name, age);
			}
		}
		let fooNewBind = foo.logName.bind(foo);
		fooNewBind(11)//张三,11  因为bind改变了fooNewBind里面的this指向

	},
	() => {
		// call
		Function.prototype.newCall = function (context, ...parameter) {
			if (typeof context === 'object' || typeof context === 'function') {
				context = context || window
			} else {
				context = Object.create(null)
			}
			let fn = Symbol()
			context[fn] = this
			const res = context[fn](...parameter)
			delete context.fn;
			return res
		}


		let person = {
			name: 'Abiel'
		}
		function sayHi(age, sex) {
			console.log(this.name, age, sex);
		}
		sayHi.newCall(person, 25, '男'); // Abiel 25 男

	},
	() => {
		// apply
		Function.prototype.newApply = function (context, parameter) {
			if (typeof context === 'object' || typeof context === 'function') {
				context = context || window
			} else {
				context = Object.create(null)
			}
			let fn = Symbol()
			context[fn] = this
			const res = context[fn](...parameter);
			delete context[fn]
			return res
		}
		let person = {
			name: "Abiel"
		};
		function sayHi(age, sex) {
			console.log(this.name, age, sex);
		}
		sayHi.newApply(person, [25, '男']) //Abiel 25 男

	},
	() => {
		// bind
		Function.prototype.bind = function (context, ...innerArgs) {
			var me = this
			return function (...finnalyArgs) {
				return me.call(context, ...innerArgs, ...finnalyArgs)
			}
		}
		let person = {
			name: 'Abiel'
		}
		function sayHi(age, sex) {
			console.log(this.name, age, sex);
		}
		let personSayHi = sayHi.bind(person, 25)
		personSayHi('男')

	}

]

run[run.length - 1]();
