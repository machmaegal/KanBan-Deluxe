import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Create = ({ addTicket }) => {
    const aDate = new Date;
    const ticketStatus = 'To Do';
    const createdDate = aDate.toISOString().split('T').at(0);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleTitleInput = (e) => setTitle(e.target.value);
    const handleDescriptionInput = (e) => setDescription(e.target.value);
    const handleAssigneeInput = (e) => setAssignee(e.target.value);
    const handlePriorityInput = (e) => setPriority(e.target.value);
    const handleDueDateInput = (e) => setDueDate(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTicket = { id: uuidv4(), title: title, description: description, assignee: assignee, status: ticketStatus, priority: priority, createdDate: createdDate, dueDate: dueDate };
        addTicket(newTicket);

        setTitle(''); setDescription(''); setAssignee(''); setPriority(''); setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <span>Create a new Ticket</span>
            <label>
                Title
                <input name="title" required value={title} onChange={handleTitleInput} type="text" placeholder="enter title" />
            </label>

            <label>
                Description
                <input name="description" value={description} onChange={handleDescriptionInput} type="text" placeholder="add a description" />
            </label>

            <label>
                Assignee
                <input name="assignee" value={assignee} onChange={handleAssigneeInput} type="text" placeholder="add a name" />
            </label>

            <label>
                Due Date
                <input name="dueDate" value={dueDate} onChange={handleDueDateInput} type="text" placeholder="YYYY-MM-DD" />
            </label>

            <label>
                Priority
                <label className='radio' htmlFor='Low'><input type="radio" name="priority" value='Low' onChange={handlePriorityInput} />Low</label>
                <label className='radio' htmlFor='Medium'><input type="radio" name="priority" value='Medium' onChange={handlePriorityInput} />Medium</label>
                <label className='radio' htmlFor='High'><input type="radio" name="priority" value='High' onChange={handlePriorityInput} />High</label>
            </label>

            <div>
                <button type="submit" >Create</button>
            </div>

        </form>
    );
};

export default Create;