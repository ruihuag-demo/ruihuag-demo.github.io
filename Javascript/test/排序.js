let list = [
  "iPhone 1",
  "iPhone 11",
  "iPhone 12",
  "iPhone 13",
  "iPhone 2",
  "iPhone 2 plus",
  "iPhone 3",
  "iPhone 10",
  "iPhone 1 关",
  "iPhone 12 关",
];

list
  .map((item) => {
    // let total = 0;
    // let tList = item.split(/\s/);

    let result = item.split(/\s/);
    if (result.length === 1) {
      result.push("");
      result.push("");
    }
    if (result.length === 2) {
      result.push("");
    }
    return result;
  })
  .sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      }
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .map((item) => {
    console.log(item.join(" "));
  });

let a = [1, 5345, , 345, 345];
console.log(
  a.map((item) => {
    return item + '------jfjsdkfjskdfj';
  })
);
