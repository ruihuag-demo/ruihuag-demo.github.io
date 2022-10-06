/*
 * @Author: ruihuag 
 * @Date: 2021-05-24 16:06:47 
 * @Last Modified by: ruihuag
 * @Last Modified time: 2021-05-24 16:19:52
 */

function fn1() {
	var name = 'iceman';
	function fn2() {
		console.log(name);
	}
	// fn2();
	fn3(fn2);
}

function fn3(fn) {
	fn();
}

// fn1();

function module() {
	var arr = [];
	function add(val) {
		if (typeof val == 'number') {
			arr.push(val);
		}
	}
	function get(index) {
		if (index < arr.length) {
			return arr[index]
		} else {
			return null;
		}
	}
	return {
		add: add,
		get: get
	}
}

var mod1 = module();
mod1.add(1);
mod1.add(2);
mod1.add('xxx');
console.log(mod1.get(1));
console.log(mod1.get(2));

