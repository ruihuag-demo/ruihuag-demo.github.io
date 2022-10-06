import * as React from 'react';

const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee"
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222"
	}
};

const ThemeContext = React.createContext(themes.light);

function App() {
	return (
		<ThemeContext.Provider value={themes.dark}>
			<Toolbar />
		</ThemeContext.Provider>
	);
}

function Toolbar(props: any) {
	return (
		<div>
			<ThemedButton />
		</div>
	);
}

function ThemedButton() {
	const theme = React.useContext(ThemeContext);
	// console.log(theme)
	return (
		<button style={{ background: theme.background, color: theme.foreground }}>
			I am styled by theme context!
		</button>
	);
}

export default App