let arr = [
	()=>{
		// _
		console.log( 100_00 === 10000, 0x11_1 === 0x111 , 0b11_1 === 0b111 )
	},
	() =>{
		// ??
		console.log( 
			undefined || 'default',
			null || 'default',
			false || 'default',
			0 || 'default',
			
			undefined ?? 'default',
			null ?? 'default',
			false ?? 'default',
			0 ?? 'default',
			)

			let a = { b: null, c: 10 }
			a.b = a.b ?? 20
			a.c = a.c ?? 20
			console.log(a)
	},
	()=> {
		// ?.
		const obj = {
			a: 'foo',
			b: {
				c: 'bar'
			}
		}		
		console.log(
			obj.b?.c,
			obj.d?.c,
			obj.func?.(),
		)
	},
	() => {
		// 私有方法/属性 #
		class Person{
			getDesc(){
				return this.#name + " " + this.#getAge()
			}

			#getAge(){
				return this.#age
			}
			get #name(){
				return 'foo'
			}
			#age = 23
		}
		const a = new Person()
		console.log(a.age)
		console.log(a.getDesc())
	},
	()=>{
		// ~~
		console.log( ~~4.5 , ~~-4.5)
	},
	()=>{
		// void
		const customMethod = ()=> 123
		const func = () => void customMethod();
		console.log(func())
	},
	()=>{
		// **
		console.log( 2**3 )			
	},
	
]

arr[arr.length-1]();

arr[1]();

