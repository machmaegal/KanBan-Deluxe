import React, { useState } from 'react';
import Tasks from './Tasks';

const Display = ({ taskData }) => {
	const isToDo = taskData.filter((task) => task.status === 'To Do');
	const isInProgress = taskData.filter((task) => task.status === 'In Progress');
	const isDone = taskData.filter((task) => task.status === 'Done');

	const handleDragOver = (e) => {
		e.stopPropagation();
		e.preventDefault();
	};
	const handleDrop = (e) => {
		e.stopPropagation();
		e.preventDefault();
		const data = e.dataTransfer.getData("text");
		e.target.appendChild(document.getElementById(data));
	};


	return (
		<div className='display'>
			<section id="todo"
				onDragOver={handleDragOver}
				onDrop={handleDrop}

			> <Tasks filteredTasks={isToDo} />
			</section>

			<section id="in-progress"
				onDragOver={handleDragOver}
				onDrop={handleDrop}

			><Tasks filteredTasks={isInProgress} />
			</section>

			<section id="done"
				onDragOver={handleDragOver}
				onDrop={handleDrop}

			> <Tasks filteredTasks={isDone} />
			</section>
		</div>
	);
};

export default Display;
