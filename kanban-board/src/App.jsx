import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer.jsx';
import About from './pages/About';
import ItemDetails from './pages/ItemDetails';
import Error from './pages/Error';
import { Routes, Route } from 'react-router-dom';
import Create from './pages/Create.jsx';
import taskData from './assets/mock-data.json';
import { useState } from 'react';

const App = () => {
	const [data, setMockData] = useState(taskData);

	const addTicket = (newTicketObj) => { setMockData(prevTickets => [...prevTickets, newTicketObj]); };

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<MainContainer taskData={data} />} />
				<Route path='/createTicket' element={<Create addTicket={addTicket} />} />
				<Route path='/about' element={<About />} />
				<Route path='/details/:taskId' element={<ItemDetails taskData={data} />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
