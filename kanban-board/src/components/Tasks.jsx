import React, { useState } from 'react';

function Tasks({ filteredTasks }) {

    const handleDragStart = (e) => {
        e.dataTransfer.clearData();
        e.dataTransfer.setData("text/plain", e.target.id);
    };

    return filteredTasks.map((task) => {
        return <div id={task.id} className={'taskcard priority' + task.priority}
            key={task.id}
            draggable
            onDragStart={handleDragStart} >

            <div className='cardHeader'>
                <h1>{task.title}</h1>
                <button>x</button>
            </div>
            <h2>{task.priority}</h2>
            <p>{task.description}</p>
            <p>{task.status}</p>
        </div>;
    });
}

export default Tasks;