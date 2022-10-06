import React from "react";
// import { Provider, inject } from './comm';
import store from './store'
import Test from './test'
// inject
// observer

const stores: { [key: string]: any } = {
	mobx: store
}

const MobxProviderContext: any = React.createContext({})

const Index = () => {

	return (<MobxProviderContext.Provider value={stores}>
		<PageA />
		<PageB />
		<PageC />
	</MobxProviderContext.Provider>)
}

// const StoreLoop: any[] = []

function inject(storeNames: string): any {
	return function (TclassComponent: any): any {
		return function (props: any) {
			const selectStores: any = React.useContext(MobxProviderContext)

			const mprops: { [key: string]: any } = {
				[storeNames]: {}
			}

			let obj: any = selectStores[storeNames]
			for (let key in obj) {
				if (obj[key] instanceof Function) {
					mprops[storeNames][key] = obj[key]
				} else {
					const [val, setVal] = React.useState(obj[key])
					Object.defineProperty(mprops[storeNames], key, {
						enumerable: true,
						configurable: true,
						set: function (newVal: any) {
							setVal(newVal)
						},
						get: function () {
							return val
						}
					})
				}
			}

			return <TclassComponent
				// {...{
				// 	[storeNames]: selectStores[storeNames]
				// }}
				{...mprops}
			/>
		}
	}
}

class PageB extends React.Component {
	render() {
		return <div>
			PageB
		</div>
	}
}

const PageA: any = inject('mobx')((props: any) => {
	console.log(props.mobx)
	const { name = 'default', _a } = props.mobx

	return <div>
		PageAA{name}<br />
		{props.mobx.num}
		<button onClick={() => {
			// props.mobx.updateName('jfkjsadfkjsfk');
			props.mobx.add();

			// console.log('obj', props.mobx);
			// props.mobx.getName();
		}}>log</button>
	</div>
});

@inject('mobx')
class PageC extends React.Component<any, any> {
	render() {
		const { mobx = {} } = this.props
		let { name = 'default' } = mobx

		return <div>
			PageAA{name}<br />
			{this.props.mobx.num}
			<button onClick={() => {
				// console.log('props', this.props);
				// this.props.mobx.updateName('jfkjsadfkjsfk');
				this.props.mobx.add();
				// console.log('obj', obj);
				// props.mobx.getName();
			}}>log</button>
		</div>
	}
}

export default Index;