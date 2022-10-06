// 用AOP装饰函数实现装饰者模式
Function.prototype.before = function (beforefn) {
	var self = this;    //保存原函数引用
	return function () {  //返回包含了原函数和新函数的 '代理函数'
		beforefn.apply(this, arguments);    //执行新函数，修正this
		return self.apply(this, arguments);  //执行原函数
	}
}
Function.prototype.after = function (afterfn) {
	var self = this;
	return function () {
		var ret = self.apply(this, arguments);
		afterfn.apply(this, arguments);
		return ret;
	}
}
var func = function () {
	console.log('2');
}
//func1和func3为挂载函数
var func1 = function () {
	console.log('1');
}
var func3 = function () {
	console.log('3');
}



func = func.before(func1).after(func3);
func();

/* 传参写法 */
let funcB = function () {
	console.log('bb');
}

let func4 = (aa) => {
	console.log(aa)
}

funcA = funcB.before(func4.bind({}, 1)).after(func4.bind({}, 0));
funcA();