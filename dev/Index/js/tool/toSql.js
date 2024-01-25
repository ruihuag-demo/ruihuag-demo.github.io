
{
	let arr = "username, password, name, phone, jobDesc, mail, proTeam, department, uType, tAuthType".split(', ');

	let arr2 = arr.map(item => {
		return "#{"+item+"}";
	})

	console.log( "("+arr +")values(" + arr2.join(',') +")")
	console.log("")

	let arr3 = arr.map(item=> {
		return "set " + item + "=#{"+item+"}"
	})

	console.log('' + arr3.join(",") )

}
console.log("------------------------------");


{
	let str = `	private String id;
	private String name;
	private String uid;
	private String uName;
	private String comment;
	private String status;`;
	let arr = str.split("private String").join().split(";").join().split(`\n\t`).join().split(',').filter(i=>i)

	let arr2 = arr.map(item=>{
		let temp = item.replace(/\s+/g,"");
		if(temp!=='')
		return temp
	}).filter(i=>i)

	let insertSql = arr2.map(item=> {
		return "#{" +item+"}"
	})
	console.log("("+arr2.join(',')+")values("+insertSql.join(',')+")")

	let updateSql = arr2.map(item=> {
		return "set " + item + "=#{"+item+"}"
	})
	console.log( updateSql.join(',') )
}