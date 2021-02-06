import React, { useState } from 'react';

export default function ToDoItem(props) {
	return (
		<li key={props.id} className="to-do-list-items">
			{props.name}
		</li>
	);
}
