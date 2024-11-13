import React from 'react';
import Sidebar from './Sidebar';
import Displays from './Displays';

const Navigation = () => {
	return (
		<div className='main-container'>
			<Sidebar />
			<Displays />
		</div>
	);
};

export default Navigation;
