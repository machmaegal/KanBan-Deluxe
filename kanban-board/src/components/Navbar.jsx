import React from 'react';
import logo from '../assets/Kanban_Logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="kanban logo" />
            <Link to='/'><h1>KanBanBoard</h1></Link>
        </nav>
    );
}

export default Navbar;