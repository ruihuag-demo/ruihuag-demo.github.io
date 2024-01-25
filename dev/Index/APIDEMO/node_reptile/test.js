let aaa = {
	a:111,
	b:{
		c: 22,
		d: 23,
	}
}

let bb = aaa;
bb.a = 122;

let cc = JSON.parse(JSON.stringify(aaa))
// console.log( bb , aaa)
// cc.a = 222;
cc.b.c = 333;

console.log(cc)
console.log(aaa)
console.log( bb);