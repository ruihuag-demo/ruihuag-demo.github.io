
function unCurryingFn() {
	// 轻提示
	function Toast(option) {
		this.prompt = '';
	}
	Toast.prototype = {
		constructor: Toast,
		// 输出提示
		show: function () {
			console.log(this.prompt);
		}
	};

	// 新对象
	var obj = {
		prompt: '新对象'
	};

	function unCurrying(fn) {
		return function () {
			var args = [].slice.call(arguments);
			var that = args.shift();
			return fn.apply(that, args);
		}
	}

	var objShow = unCurrying(Toast.prototype.show);

	objShow(obj); // 输出"新对象"


}


// unCurryingFn();


/* 偏函数 */
function pFn() {
	//入参函数
	function add(a, b) {
		return a + b;
	}
	//生产偏函数的工厂
	function partial(fn, a) {
		return function (b) {
			return fn(a, b);
		}
	}
	var parAdd = partial(add, 1);//变量parAdd接受返回的新函数
	console.log(parAdd(2));//在调用的时候传入剩余的参数
	console.log(parAdd(3));//在调用的时候传入剩余的参数
	console.log(parAdd(4));//在调用的时候传入剩余的参数
	console.log(parAdd(5));//在调用的时候传入剩余的参数
}

// pFn();

function add(a, b) {
	return a + b;
}
var obj = {};
obj.parAdd = add.bind(obj, 1);
console.log(obj.parAdd(2));// 3
console.log(add.bind(obj, 1, 2));
console.log(add.bind(obj, 1, 2)());