
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
      if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
      this.splice(index, 1);
  }
};
// 这里val: 下标, sub : 要修改后的值
Array.prototype.replace = function(val, sub) {
  var index = this.indexOf(val);
  if (index > -1) {
      this[index] = sub
  }
}

let i = 0;
let arr = Array.from( { length: 10}, () => i++)  

// console.log( arr ) 

// console.log(arr.indexOf(8))
// arr.remove(7)
// console.log( arr);
// arr.replace(5, 2)
// console.log( arr);

// console.log(arr.reduce( (acc, cur ) => {
//   console.log( acc , cur) ;
//   return acc + cur;
// }));


console.log( arr.reduceRight( (prev , cur) => {
  return prev + cur;
}))

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

let arr3 = Array.from({ length: 2 }, () => 'jack')

console.log(arr1, arr2, arr3 );
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log(
  [1, 4, -5, 10 ].findIndex( n => n > 20)
)

// delete arritem
{
  let arr = [1, 2, 3, 4, 5, 6 ]
  delete arr[2]
  arr = arr.filter( item => item)
  console.log( arr )
}

{
  let a = '2'
  let b = a -1;
  console.log( b );
}