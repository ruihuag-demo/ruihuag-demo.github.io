// import * as React from 'react'
// import { copyStaticProperties } from './utils'
// import { MobxProviderContext } from './Provider'

// export type IReactComponent<P = any> =
// 	| React.ClassicComponentClass<P>
// 	| React.ComponentClass<P>
// 	| React.FunctionComponent<P>
// 	| React.ForwardRefExoticComponent<P>

// export type IWrappedComponent<P> = {
// 	wrappedComponent: IReactComponent<P>
// }

// export type IValueMap = Record<string, any>

// export type IStoresToProps<
// 	S extends IValueMap = {},
// 	P extends IValueMap = {},
// 	I extends IValueMap = {},
// 	C extends IValueMap = {}
// 	> = (stores: S, nextProps: P, context?: C) => I

// // export function inject(...stores: Array<string>): <T extends IReactComponent<any>>(target: T)
// // 	=> T & (T extends IReactComponent<infer P> ? IWrappedComponent<P> : never)

// // export function inject<S, P, I, C>(
// // 	fn: IStoresToProps<S, P, I, C>
// // ): <T extends IReactComponent>(target: T) => T & IWrappedComponent<P>

// export function inject(/* fn(stores, nextProps) or ...storeNames */ ...storeNames: Array<any>) {
// 	// const context: any = React.useContext(MobXProviderContext)
// 	console.log(arguments)
// 	// console.log(context);
// 	console.log(MobxProviderContext);

// 	return (com: any) => com;
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