import React, { useState } from 'react';

export default function Form(props) {
	// const [cardText, updateCardText] = useState('');

	return (
		<form>
			<h2>
				<label htmlFor="new-item">Add Item to List</label>
			</h2>
			<input type="text" id="new-item" name="text" />
			<button type="submit">Add Item</button>
		</form>
	);
}
