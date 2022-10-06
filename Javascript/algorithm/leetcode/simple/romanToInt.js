/**
 * 罗马数字转换成数字 
 * 输入确保在 1 到 3999 的范围内
 * 罗马数字转换表 https://b2b.partcommunity.com/community/knowledge/zh_CN/detail/10753/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97#knowledge_article
 * @param {*} s 
 */

// 罗马数字转换成数字
var romanToInt = function (s) {
  let Roma = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0;
  for (let i = 0, range = s.length; i < range; i++) {
    if (Roma[s[i]] < Roma[s[i + 1]]) result -= Roma[s[i]]
    else result += Roma[s[i]]
  }
  return result;
}

// console.log( romanToInt('MIII') )

// 数字转换成罗马数字
var IntToRoman = function (num) {
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let index = 0;
  let result = "";
  while (index < 13) {
      if (num >= nums[index]) {
          result += romans[index];
          num -= nums[index];
      } else {
          index ++;
      }
  }
  return result;

}
console.log(IntToRoman(123))