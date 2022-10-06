/*策略类*/
var levelOBJ = {
	"A": function (money) {
		return money * 4;
	},
	"B": function (money) {
		return money * 3;
	},
	"C": function (money) {
		return money * 2;
	}
};
/*环境类*/
var calculateBouns = function (level, money) {
	return levelOBJ[level](money);
};
console.log(calculateBouns('A', 10000)); // 40000