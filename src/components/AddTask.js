import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../redux/TodoSlice';

const AddTask = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch()
	const addTodo = () => {
	  console.log(`adding ${value}`)
	  
	  dispatch(saveTodo({
		title: value,
		completed : false,
		id: Date.now()
	  }))
	}

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo();
		setValue("");
	};

	return (
		
		<form onSubmit={onSubmit}>
			
			<input
				type='text'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit'>
				Submit
			</button>
		</form>
	);
};

export default AddTask;