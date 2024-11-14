import React from 'react';
import Sidebar from './Sidebar';
import Display from './Display';

const Navigation = () => {
	return (
		<div className='main-container'>
			<Sidebar />
			<Display />
		</div>
	);
};

export default Navigation;
