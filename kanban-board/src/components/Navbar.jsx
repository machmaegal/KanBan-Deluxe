import React from 'react';
import logo from '../assets/Kanban_Logo.png';

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="kanban logo" />
            <h1>KanBan-Deluxe</h1>
        </nav>
    );
}

export default Navbar;