

class Store {
	name: string = 'ruihuag'
	num: number = 1
	_a: string = 'aa'
	set a(str: string) {
		this.a = str;
	}
	get a() {
		return this._a;
	}
	add() {
		this.num++;
	}
	getName(): string {
		// console.log('this', this);
		return this.name;
	}
	updateName(str: string): void {
		this.name = str;
		// this.getName()
	}
	// 	getName: function(): string{
	// 	console.log(this)
	// 	return 'name'
	// 	// return this.name
	// }
	// update: function() {

	// }
}

export default new Store();