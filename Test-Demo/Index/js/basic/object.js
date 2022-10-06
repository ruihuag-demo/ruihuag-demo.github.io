{
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  const returnedTarget = Object.assign(target, source);

  console.log(source); // { b: 4, c: 5 }
  console.log(target);
  // expected output: Object { a: 1, b: 4, c: 5 }
  console.log(returnedTarget);
  // expected output: Object { a: 1, b: 4, c: 5 }
}



{
  const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman} `)
    }
  }

  const me = Object.create(person);
  me.name = "GRH";
  me.isHuman = true;
  me.printIntroduction();

}
console.log("\n\n\n\n")
{
  var obj = {};
  Object.defineProperties(obj, {
    'property1': {
      value: true,
      writable: true
    },
    'property2': {
      value: 'Hello',
      writable: false
    }
    // etc. etc.
  });

  console.log(obj); // {}
  console.log(obj.property1); // true
  console.log(obj.property1.value); // undefined
  console.log(obj.property1.writable); // undefined
  console.log(obj.property2); // {}
}
console.log("\n\n\n\n")

{
  const object1 = { foo: 'bar', baz: 42 };
  console.log(Object.entries(object1)[1]);
  // expected output: Array ["baz", 42]

  const object2 = { 0: 'a', 1: 'b', 2: 'c' };
  console.log(Object.entries(object2)[2]);
  // expected output: Array ["2", "c"]

  const result = Object.entries(object2).sort((a, b) => a - b);
  console.log(Object.entries(result)[1]);
  // expected output: Array ["1", Array ["1", "b"]]

  console.log( Object.entries(object1)) // 将对象转换为数组

}

console.log("\n")

{
  const object1 = {
    property1: 42
  };

  const object2 = Object.freeze(object1);

  object2.property1 = 33;
  // Throws an error in strict mode

  console.log(object2.property1);
  // expected output: 42

}

console.log("\n")

{
  // Map 转化为 Object
  // 通过 Object.fromEntries， 可以将 Map 转化为 Object:

  const map = new Map([['foo', 'bar'], ['baz', 42]]);
  const obj = Object.fromEntries(map);
  console.log(obj); // { foo: "bar", baz: 42 }

  // Array 转化为 Object
  // 通过 Object.fromEntries， 可以将 Array 转化为 Object:

  const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
  const obj2 = Object.fromEntries(arr);
  console.log(obj2); // { 0: "a", 1: "b", 2: "c" }
  // 对象转换为Object
  // Object.fromEntries 是 Object.entries() 的反转函数， 借用 array manipulation methods 可以转换对象，如下：

  const object1 = { a: 1, b: 2, c: 3 };

  const object2 = Object.fromEntries(
    Object.entries(object1)
      .map(([key, val]) => [key, val * 2])
  );

  console.log(object2);
  // { a: 2, b: 4, c: 6 }
  // 8、Object.is() 方法判断两个值是否是相同的值
}

{
  
}