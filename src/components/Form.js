import React, { useState } from 'react';

export default function Form(props) {
	const [item, updateItem] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		props.addItem(item);
		updateItem('');
	};

	const handleChange = e => {
		updateItem(e.target.value);
	};

	return (
		<form>
			<h2>
				<label htmlFor="new-item">Add Item to List</label>
			</h2>
			<input
				type="text"
				id="new-item"
				name="text"
				value={item}
				onChange={handleChange}
			/>
			<button type="submit" onClick={handleSubmit}>
				Add Item
			</button>
		</form>
	);
}
