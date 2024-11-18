import React from 'react';
import Sidebar from './Sidebar';
import Display from './Display';

const MainContainer = () => {
	return (
		<div className='main-container'>
			<Sidebar />
			<Display />
		</div>
	);
};

export default MainContainer;
