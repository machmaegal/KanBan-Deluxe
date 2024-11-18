import React from 'react';
import Sidebar from './Sidebar';
import Display from './Display';

const MainContainer = ({ taskData }) => {
	return (
		<div className='main-container'>
			<Sidebar />
			<Display taskData={taskData} />
		</div>
	);
};

export default MainContainer;
