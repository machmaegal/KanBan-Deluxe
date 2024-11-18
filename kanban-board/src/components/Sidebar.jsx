import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<Link to='/'><button>Home</button></Link>
			<Link to='/'><button>Board</button></Link>
			<Link to='/about'><button>About Us</button></Link>
		</div>
	);
};

export default Sidebar;
