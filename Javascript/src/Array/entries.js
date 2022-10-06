const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

for (let i of iterator1) {
	console.log(i)
}

// console.log(iterator1.next().value);
// expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// expected output: Array [1, "b"]