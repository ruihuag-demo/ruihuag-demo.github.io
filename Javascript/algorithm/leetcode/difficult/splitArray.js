/**
 * 未做出
 LCP 14. 切分数组
给定一个整数数组 nums ，小李想将 nums 切割成若干个非空子数组，使得每个子数组最左边的数和最右边的数的最大公约数大于 1 。为了减少他的工作量，请求出最少可以切成多少个子数组。

示例 1：

输入：nums = [2,3,3,2,3,3]

输出：2

解释：最优切割为 [2,3,3,2] 和 [3,3] 。第一个子数组头尾数字的最大公约数为 2 ，第二个子数组头尾数字的最大公约数为 3 。

示例 2：

输入：nums = [2,3,5,7]

输出：4

解释：只有一种可行的切割：[2], [3], [5], [7]

限制：

    1 <= nums.length <= 10^5
    2 <= nums[i] <= 10^6
 */
const PN = 10 ** 6 + 1
const PNSqrt = Math.sqrt(PN)
var splitArray = function(nums) {
    if((nums === null) || (nums.length === 0)) return 0
    const prime = []
    const isPrime = new Array(PN).fill(true)
    for(let i = 2; i <= PNSqrt; i++) {
        if(!isPrime[i]) continue
        prime.push(i)
        for(let j = i; j < PN; j += i) isPrime[j] = false 
    }
    const n = nums.length
    const dp = new Array(n + 1).fill(n)
    const has = []
    const pFlag = new Array(PN).fill(n)
    dp[0] = 0
    for(let i = 1; i <= n; i++) {
        let x = nums[i - 1]
        has.length = 0
        for(let j = 0; j < prime.length; j++) {
            const p = prime[j]
            if(x < p) break
            if((x % p) === 0) {
                has.push(p)
                while((x % p) === 0) x /= p
            }
        }
        if(x !== 1) has.push(x)
        /**
         * 基本递推公式: 一个数都没遍历的时候， dp[0] = 0
         * 每遍历一个数x = nums[i], x要么跟[0, i -1]范围内的某个数组成一组, 要么
         * 自己单独一组, 具体怎么选择, 看怎么选择结果最小。
         * pFlag[p]记录的是在[0, i - 1]中， 我i遍历到i - 1为止,我前面的nums[i]有出现过质因数p, 我选择某一个位置t与i组成一组的情况下， dp[t - 1]的最小值。
         * 这里一个数的某个质因数如果是前面多个数的质因数, 那么应该选择使得结果最小的那个位置 
         * 
         */
        for(let j = 0; j < has.length; j++) {
            const p = has[j]
            pFlag[p] = Math.min(pFlag[p], dp[i - 1])
            dp[i] = Math.min(dp[i], pFlag[p] + 1)
        }
    }
    return dp[n]
};

console.log(splitArray([2,3,3,2,3,3]))