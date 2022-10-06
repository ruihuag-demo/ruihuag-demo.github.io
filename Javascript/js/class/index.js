/* ReferenceError: Class01 is not defined */
try {
	var ins01 = new Class01();
} catch (e) {
	console.error(e);
}
class Class01 { }
console.log(typeof Class01); /* function */
/* Class constructor Class01 cannot be invoked without 'new' */
try {
	Class01()
} catch (e) {
	console.error(e);
}