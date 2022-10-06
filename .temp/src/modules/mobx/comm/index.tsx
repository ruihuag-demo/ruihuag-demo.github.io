// import * as React from 'react';
// type IValueMap = Record<string, any>;

// // export type IReactComponent<P = any> =
// // 	| React.ClassicComponentClass<P>
// // 	| React.ComponentClass<P>
// // 	| React.FunctionComponent<P>
// // 	| React.ForwardRefExoticComponent<P>

// // export type IWrappedComponent<P> = {
// // 	wrappedComponent: IReactComponent<P>
// // }

// // export type IStoresToProps<
// // 	S extends IValueMap = {},
// // 	P extends IValueMap = {},
// // 	I extends IValueMap = {},
// // 	C extends IValueMap = {}
// // 	> = (stores: S, nextProps: P, context?: C) => I


// // export const MobxProviderContext = React.createContext({});

// // export interface ProviderProps extends IValueMap {
// // 	children: React.ReactNode;
// // }

// // export function inject(
// // 	...stores: Array<string>
// // ): <T extends IReactComponent<any>>(
// // 		target: T
// // 	) => T & (T extends IReactComponent<infer P> ? IWrappedComponent<P> : never)

// // export function inject<S, P, I, C>(
// // 	fn: IStoresToProps<S, P, I, C>
// // ): <T extends IReactComponent>(target: T) => T & IWrappedComponent<P>

// export function inject(/* fn(stores, nextProps) or ...storeNames */ ...storeNames: Array<any>) {
// 	// const tmp: any = React.useContext(MobXProviderContext)
// 	console.log(arguments)
// 	// console.log(context);
// 	// console.log(MobxProviderContext);

// 	return (componentClass: any) => {
// 		let Injector = React.forwardRef((props, ref) => {

// 			// const parentValue222 = React.useContext(MobxProviderContext)
// 			return React.createElement(componentClass, props);
// 		})

// 		return Injector;
// 	}
// 	// if (typeof arguments[0] === "function") {
// 	// 	let grabStoresFn = arguments[0]
// 	// 	return (componentClass: React.ComponentClass<any, any>) =>
// 	// 		componentClass
// 	// 	// createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true)
// 	// } else {
// 	// 	return (componentClass: React.ComponentClass<any, any>) =>
// 	// 		componentClass
// 	// 	// createStoreInjector(
// 	// 	// 	grabStoresByName(storeNames),
// 	// 	// 	componentClass,
// 	// 	// 	storeNames.join("-"),
// 	// 	// 	false
// 	// 	// )
// 	// }
// }

// export function Provider(props: ProviderProps) {

// 	const { children, ...stores } = props;
// 	const parentValue = React.useContext(MobxProviderContext)
// 	const mutableProviderRef = React.useRef({ ...parentValue, ...stores })
// 	const value = mutableProviderRef.current

// 	//...待完成

// 	return <MobxProviderContext.Provider value={value}>
// 		{children}
// 	</MobxProviderContext.Provider>
// }