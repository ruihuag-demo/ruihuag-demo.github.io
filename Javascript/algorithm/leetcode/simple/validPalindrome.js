var str1 = "aba";
var str2 = "abca";
/**
 * 1.可能后面多一个字母
 * 2.可能前面多一个字母
 * @param {*} str 
 */
var validPalindrome = (s,flag = true) =>{
    // let str_length = str.length;
    // let order = str.split("").splice(0, str_length/2);
    // let reverse_order = str.split("").splice(str_length/2, str_length).reverse();
    
    // console.log(order, reverse_order)
    // let flag = true;
    // let temp = 1;
    // order.forEach((value1, index1) => {
    //     console.log(index1, value1)
    //     reverse_order.forEach((value2, index2) => {
    //         value1==value2 && 
    //         console.log(index2, value2,"\n")
    //     });
    // });

    //用来标记那个下标开始异常
    let l = 0 ,r =s.length-1;
    while(l<r&& s[l] === s[r])l++,r--;
    if(r <= l ) return true;
    if(flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l+1, r+1), false)
    return false;
}


// console.log(validPalindrome(str1),validPalindrome(str2))
console.log(validPalindrome(str2))