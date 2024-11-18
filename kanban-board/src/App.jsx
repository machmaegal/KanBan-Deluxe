import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer.jsx';
import About from './pages/About';
import ItemDetails from './pages/ItemDetails';
import Error from './pages/Error';
import { Routes, Route } from 'react-router-dom';

const App = () => {

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<MainContainer />} />
				<Route path='/about' element={<About />} />
				<Route path='/details/:taskId' element={<ItemDetails />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
