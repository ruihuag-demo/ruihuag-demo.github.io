/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	// let ss = Array.from(new Set(s.split(''))).filter(i => i);
	// let ts = Array.from(new Set(t.split(''))).filter(i => i);
	// // console.log(ss, ts);
	// let ttemp = t.split('').filter(i => i);
	// let tttemp = [];
	// if (ss.length !== ts.length) return false;
	// else {
	// 	for (let i = ss.length - 1; i > -1; i--) {
	// 		// console.log("i:", ss[i])
	// 		for (let j = ttemp.length - 1; j > -1; j--) {
	// 			// console.log(ttemp[j], ss[i]);
	// 			if (s[j] === ss[i]) {
	// 				// console.log(j);
	// 				// console.log("jj:", ttemp[j])
	// 				// ttemp[j] = ss[i];
	// 				tttemp[j] = ss[i];
	// 			}
	// 		}
	// 	}
	// }

	// console.log(tttemp.join(""))

	// return tttemp.join("") === s;
	console.log('s', s, 's:', s.length);
	for (let i = 0; i < s.length; i++) {
		console.log(s.indexOf(s[i] == t.indexOf(t[i])));
		console.log(s.indexOf(s[i] != t.indexOf(t[i])));
		if (s.indexOf(s[i] != t.indexOf(t[i]))) {
			return false;
		}
	}
	return true;
};


console.log(isIsomorphic("egg", "add"))
// "bbbaaaba"
// "aaabbbba"
console.log(isIsomorphic("bbbaaaba", "aaabbbba"))