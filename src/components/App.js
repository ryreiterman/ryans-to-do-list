import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import Form from './Form';

export default function App(props) {
	const [toDos, setToDos] = useState(props.toDos);

	const addItem = item => {
		const newItem = { id: 'id', name: item, completed: false };
		setToDos([...toDos, newItem]);
	};

	const toDoList = toDos.map(toDo => (
		<ToDoItem
			id={toDo.id}
			name={toDo.name}
			completed={toDo.completed}
			key={toDo.id}
		/>
	));

	return (
		<div className="page-wrapper">
			<h1 className="page-title">Ryan's To-Do List</h1>
			<Form addItem={addItem} />
			<div className="to-do-list-container">
				<h3>To-Do Items:</h3>
				<ul className="to-do-list">{toDoList}</ul>
			</div>
		</div>
	);
}
