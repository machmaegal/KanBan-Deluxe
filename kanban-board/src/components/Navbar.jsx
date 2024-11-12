import React from 'react';
import logo from '../assets/kanban_doodle.png';

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="kanban logo" />
            <h1>KanBan-Deluxe</h1>
        </nav>
    );
}

export default Navbar;