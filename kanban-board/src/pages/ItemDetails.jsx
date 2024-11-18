import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = (taskData) => {
    const { taskId } = useParams();
    const task = taskData.find((task) => task.id === taskId);


    return (
        <div>ItemDetails</div>
    );
};

export default ItemDetails;