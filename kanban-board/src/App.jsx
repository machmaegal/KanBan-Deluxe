import './App.css'
import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<Footer />
		</div>
	)
}

export default App
