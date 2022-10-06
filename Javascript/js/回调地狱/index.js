readFile('./sample.txt').then(content => {
	let keyword = content.substring(0, 5);
	return queryDB(keyword);
}).then(res => {
	return getData(res.length);
}).then(data => {
	console.log(data);
}).catch(err => {
	console.warn(err);
});


const generator = function* () {
	yield 11;
	yield 22;
	return 33;
}

let g = generator();
g.next(); // { value: 11, done: false }
g.next(); // { value: 22, done: false }
g.next(); // { value: 33, done: true }
g.next(); // { value: undefined, done: true 


async function foo() { };
const foo = async function () { };
const foo = async () => { };
// 在async函数中可以使用await语句。await后一般是一个Promise对象。
async function foo() {
	console.log('开始');
	let res = await post(data);
	console.log(`post已完成，结果为：${res}`);
};
