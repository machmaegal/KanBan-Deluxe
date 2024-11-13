import React, { useState } from 'react';
import taskData from '../assets/mock-data.json';

const Displays = () => {
	const [tasks, setTasks] = useState(taskData);

	tasks.map((task) => {
		console.log(task);

		/* return <div className='tasks' key={task.id}>
			<h1>{task.title}</h1>
			<h2>{task.priority}</h2>
			<p>{task.description}</p>
			<p>{task.status}</p>
		</div>;
	{ task.status === 'Done' && document.querySelector('#done').appendChild(task); } */
	});

	return (
		<div className='display'>
			<section id="todo"></section>
			<section id="in-progress"></section>
			<section id="done"></section>
		</div>
	);
};

export default Displays;
