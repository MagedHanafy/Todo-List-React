import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	// Initial State
	const initialState = JSON.parse(localStorage.getItem('todos')) || [];
	const [todos, setTodos] = useState(initialState);

	// Save todos to local storage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const [editItem, setEditItem] = useState(null);

	const [title, setTitle] = useState('');

	// Add todo
	const addTodo = (title) => {
		setTodos([...todos, { title, completed: false, id: uuidv4() }]);
	};

	// Remove todo
	const removeTodo = (id) => {
		setTitle('');
		setEditItem(null);
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// Clear all todo list
	const clearList = () => {
		setTitle('');
		setEditItem(null);
		setTodos([]);
	};

	// Todo completed state
	const completeHandler = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	// Find todo item
	const findItem = (id) => {
		const item = todos.find((todo) => todo.id === id);

		setEditItem(item);
	};

	// Edit todo
	const editTodo = (title, id) => {
		const newTodos = todos.map((todo) =>
			todo.id === id ? { title, id } : todo
		);

		setTodos(newTodos);
		setEditItem(null);
	};

	return (
		<GlobalContext.Provider
			value={{
				todos,
				editItem,
				title,
				setTitle,
				addTodo,
				removeTodo,
				clearList,
				completeHandler,
				findItem,
				editTodo,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
