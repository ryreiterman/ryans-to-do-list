import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const app = document.getElementById('app');

const toDoListData = [
	{ id: 'todo-0', name: 'Learn more about React', completed: true },
	{ id: 'todo-1', name: 'Write a new Component', completed: false },
	{ id: 'todo-2', name: 'Add some style', completed: false }
];

ReactDOM.render(<App toDos={toDoListData} />, app);
