import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheck, deleteTodo } from '../redux/TodoSlice';

const Task = ({ id,title, completed }) => {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    const handleDelete = (e) => {
      dispatch(deleteTodo({id : id}))
    }

        return (
		<li>
			<div >
				<span >
					<input type='checkbox' checked={completed} onChange={handleCheck}></input>
					{title}
				</span>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</li>
	);
};

export default Task;