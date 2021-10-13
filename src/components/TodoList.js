import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { GlobalContext } from '../context/GlobalState';

const TodoList = () => {
	const { todos } = useContext(GlobalContext);

	return (
		<div>
			{todos.length ? (
				<ul className='todo-list'>
					{todos.map((todo) => {
						return <TodoItem todo={todo} key={todo.id} />;
					})}
				</ul>
			) : (
				<div className='no-todos'>No Todos</div>
			)}
		</div>
	);
};

export default TodoList;
