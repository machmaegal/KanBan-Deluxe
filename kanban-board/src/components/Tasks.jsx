import React, { useState } from 'react';
import taskData from '../assets/mock-data.json';
import { Link, useParams } from 'react-router-dom';

function Tasks({ status, column }) {
    const [tasks, setTasks] = useState(taskData);

    const handleDragStart = (e) => {
        e.dataTransfer.clearData();
        e.dataTransfer.setData("text/plain", e.target.id);
        console.log(e.target.id);
    };

    return tasks.filter(task => task.status === status)
        .map((task) => {
            return <div id={status} className={'taskcard priority' + task.priority}
                key={task.id}
                draggable
                onDragStart={handleDragStart} onDragEnd={() => {/* console.log() */;
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