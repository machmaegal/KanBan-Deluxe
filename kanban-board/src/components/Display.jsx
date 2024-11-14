import React, { useState } from 'react';
import Tasks from './Tasks';

const Display = () => {
	return (
		<div className='display'>
			<section id="todo"><Tasks status={'To Do'} /></section>
			<section id="in-progress"><Tasks status={'In Progress'} /></section>
			<section id="done"><Tasks status={'Done'} /></section>
		</div>
	);
};

export default Display;
