/**
 * 没做出
 * @param {*} arr 
 */

/**
 410. 分割数组的最大值
给定一个非负整数数组和一个整数 m，你需要将这个数组分成 m 个非空的连续子数组。设计一个算法使得这 m 个子数组各自和的最大值最小。

注意:
数组长度 n 满足以下条件:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
示例:

输入:
nums = [7,2,5,10,8]
m = 2

输出:
18

解释:
一共有四种方法将nums分割为2个子数组。
其中最好的方式是将其分为[7,2,5] 和 [10,8]，
因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
 */
/**
    result = {
        high: int,//content满2^31就加一
        content: int, 
    }    

 */
function arr_sum(arr) {
    let sum = 0;
    arr.map(item => {
        sum += item;
    })
    return sum;
}

function arr_item_sum(nums, result_index, m) {
    //每一个模块进行求和
    let result = [];
    for (let i = 0; i < m; i++) {
        result[i] = arr_sum(nums.slice(result_index[i], result_index[i + 1]));
    }
    return result;
}

var splitArray = function (nums, m) {
    const len = nums.length;
    // const result = [];
    let result_index = [];
    let min_index = 0;
    let avg = nums[0];
    nums.map(item => {
        avg = (avg + item) / 2;
    })

    function arr_next(index, result_index, m) {
        //往后移动一个位置
        for (let i = index; i < m; i++) {
            result_index[i] += 1;
        }
        result = arr_item_sum(nums, result_index, m);
    }



    //先将数组的利用下标划分成m块
    for (let i = 0; i < m; i++) {
        result_index[i] = i;
    }
    // result_index.push(len);

    // let result = arr_item_sum(nums, result_index, m);
    let flag = true;
    let result_index_temp = [];
    let tmp = 9999;

    for (let i = 0; flag; i++) {

        result_index_temp = result_index;
        arr_next(min_index, result_index, m);
        result.map((item, index) => {
            min_index = item < result[min_index] ? index : min_index
        })
        // console.log(min_index);

        //通过与平均数差控制
        let ttmp = tmp;
        tmp = 0;
        result.map(item => {
            tmp += Math.abs(item - avg)
        })
        if (ttmp < tmp) {
            result_index = result_index_temp;
            break;
        }
        console.log('run', i)
        console.log(ttmp, tmp);

    }
    console.log(result_index);
    return result;
};

//有重复的相等的最小值,不好处理
var splitArray2 = function (nums, m) {
    // let arrSign = [];
    // let numsSum = [];
    // // let avg = 0;
    // let arrMin = [];
    // // nums.map(item => {
    // //     avg = (avg + item) / 2;
    // // })
    // //初始化
    // for (let i = 0; i < m; i++) {
    //     arrSign[i] = i;
    //     numsSum[i] = 0;
    // }
    // arrSign.push(nums.length);
    // let min_nums = 99999;
    // while(true){
    //     //寻找最小和的下标,可能出现多个重复的最小值
    //     numsSum.map((item, index)=>{
    //         arrMin.push(item<=nums[arrMin] ? index : arrMin)
    //     })
    //     for(let x = 0, len = arrMin.length; x<len; x++){
    //         //往后移动一位
    //         for (let i = arrMin[x],len = arrSign.length; i < len-1; i++) {
    //             arrSign[i] += 1;
    //         }
    //         //numsSum
    //         max_nums = [].concat(numsSum);
    //         for (let i = 0; i < m; i++) {
    //             numsSum[i] = 0;
    //             for (let j = arrSign[i]; j < arrSign[i + 1]; j++) {
    //                 //nums[j]--nums[arrSign[j]]   =>  sum
    //                 numsSum[i] += nums[j]
    //             }
    //         }
    //         min_nums_temp = numsSum.sort((a,b)=>b-a)[0];
    //         min_nums = min_nums_temp< min_nums? min_nums_temp : min_nums;
    //         console.log(min_nums)
    //         if(arrMin[x+1]!==null){
    //             numsSum = [].concat(max_nums)
    //         }
    //     }
    //     if(arrSign[m-1]<=1){
    //         return min_nums;
    //     }
      
    // }
    let max_item = -1;
    let len = nums.length;
    let signStr = [];
    let sumStr = [];
    for(let i = 0; i< m-1; i++){
        signStr[i] =  i+1;
    }
    console.log("singStr:"+signStr)
    sumStr[0] = nums.splice(0,signStr[0])
    for(let i = 1; i< m; i++){
        sumStr[i] = nums.splice()
        // i+=signStr[i+1];
    }
    sumStr[m-1] = nums.splice(signStr[m-1],len)
    console.log(sumStr)
    return max_item;
    
}

console.log("result",splitArray2([7, 2, 5, 10, 8], 3))