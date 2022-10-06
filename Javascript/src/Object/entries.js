// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

//-------------------------------

const object1 = {
	a: 'somestring',
	b: 42
};

for (const [key, value] of Object.entries(object1)) {
	console.log(`${key}: ${value}`);
}



// expected output:
// "a: somestring"
// "b: 42