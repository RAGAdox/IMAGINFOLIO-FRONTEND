import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import NotFound from './screens/NotFound';
const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
export default Router;