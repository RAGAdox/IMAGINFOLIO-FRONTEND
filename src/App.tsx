import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import Router from './Router';

function App() {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}

export default App;
