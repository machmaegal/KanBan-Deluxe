import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div className='sidebar'>

			<Link to='/about'><button>About Us</button></Link>
			<Link to='/createTicket'><button>New Ticket</button></Link>
		</div>
	);
};

export default Sidebar;
