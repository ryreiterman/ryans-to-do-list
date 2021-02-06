import React, { useState } from 'react';

export default function ToDoItem(props) {
	return <li key={props.id}>{props.name}</li>;
}
