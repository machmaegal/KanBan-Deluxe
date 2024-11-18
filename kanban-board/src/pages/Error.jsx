import React from 'react';
import notFoundImage from '../assets/404_BatCountry.png';
import { Link, useParams } from 'react-router-dom';

const Error = () => {
    return (
        <div className='errorPageContainer'>
            <h1>404... Bat Country</h1>
            <img src={notFoundImage} alt="This is Bat Country Meme Template" />

        </div>
    );
};

export default Error;