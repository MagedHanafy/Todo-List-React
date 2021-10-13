import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TodoItem = ({ todo }) => {
	const { removeTodo, completeHandler, findItem } = useContext(GlobalContext);

	return (
		<li className={`list-item ${todo.completed ? 'task-completed' : ''}`}>
			<div>
				<button
					className='icon completed-icon'
					onClick={() => completeHandler(todo.id)}
				>
					<i className='fas fa-check'></i>
				</button>
			</div>
			<div>
				<span className='title'>{todo.title}</span>
			</div>
			<div>
				<button className='icon edit-icon' onClick={() => findItem(todo.id)}>
					<i className='far fa-edit'></i>
				</button>
			</div>
			<div>
				<button
					className='icon remove-icon'
					onClick={() => removeTodo(todo.id)}
				>
					<i className='fas fa-trash-alt'></i>
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
