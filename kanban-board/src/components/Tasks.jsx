import React, { useState } from 'react';
import taskData from '../assets/mock-data.json';

function Tasks({ status }) {
    const [tasks, setTasks] = useState(taskData);

    return tasks.filter(task => task.status === status).map((task) => {

        return <div className={'taskcard priority' + task.priority} key={task.id} draggable onDragStart={() => {
            console.log('I am a drag');

        }}>
            <div className='cardHeader'><h1>{task.title}</h1>
                <button>x</button>
            </div>
            <h2>{task.priority}</h2>
            <p>{task.description}</p>
            <p>{task.status}</p>

        </div>;
    });

}

export default Tasks;