import React, { useState } from 'react';
// import Home from './Home';
export default function App(props) {
	const [name, updateName] = useState('Arthur');
	return (
		<div className="Page-wrapper">
			<h1>Ryan's To-Do List</h1>
			
			{/* <Home /> */}
		</div>
	);
}
