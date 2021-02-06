import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import Form from './Form';

export default function App(props) {
	const [name, updateName] = useState('Arthur');
	return (
		<div className="page-wrapper">
			<h1>Ryan's To-Do List</h1>
			<Form />

			<ul>
				<ToDoItem />
			</ul>
		</div>
	);
}
