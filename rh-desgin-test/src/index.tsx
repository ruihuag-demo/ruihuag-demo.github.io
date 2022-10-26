import React, { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
// import { TestComponent } from '@/components'
import { TestComponent }  from 'rh-desgin'
// console.log(a)
// import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<StrictMode>
		<TestComponent />
	</StrictMode>
);