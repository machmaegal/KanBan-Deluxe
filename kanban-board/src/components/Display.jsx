import React, { useState } from 'react';
import Tasks from './Tasks';

const Display = () => {
	const [column, setColumn] = useState(null);

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

			> <Tasks status={'To Do'} column={column} /> </section>

			<section id="in-progress"
				onDragOver={handleDragOver}
				onDrop={handleDrop}

			><Tasks status={'In Progress'} column={column} /> </section>

			<section id="done"
				onDragOver={handleDragOver}
				onDrop={handleDrop}

			> <Tasks status={'Done'} column={column} /> </section>
		</div>
	);
};

export default Display;
