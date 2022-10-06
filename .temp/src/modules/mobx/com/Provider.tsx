// import * as React from 'react';
// type IValueMap = Record<string, any>;

// export const MobxProviderContext = React.createContext<IValueMap>({});

// export interface ProviderProps extends IValueMap {
// 	children: React.ReactNode;
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

// Provider.displayName = "MobxProviderContext"
// // Provider.displayName = "MobXProvider"