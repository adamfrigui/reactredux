import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import { SelectTodoList } from '../redux/TodoSlice';

const ListTask = () => {

    const todos = useSelector(SelectTodoList);
	return (
		<ul style={{listStyleType :'none'}}>
			{todos.map((todo) => (
				<Task id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default ListTask;