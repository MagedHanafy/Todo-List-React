import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputForm = () => {
	const {
		editItem,
		addTodo,
		clearList,
		editTodo,
		title,
		setTitle,
	} = useContext(GlobalContext);

	//Show alert message
	const alertMessage = () =>
		toast.error('Please enter valid description', {
			position: 'top-center',
			autoClose: 3500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.trim() === '') {
			alertMessage();
		} else if (!editItem) {
			addTodo(title);
			setTitle('');
		} else {
			editTodo(title, editItem.id);
		}
	};

	useEffect(() => {
		if (editItem) {
			setTitle(editItem.title);
			console.log(editItem);
		} else {
			setTitle('');
		}
	}, [editItem, setTitle]);

	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				type='text'
				placeholder='Add Todo...'
				value={title}
				onChange={handleChange}
				className='form-input'
				autoComplete='off'
			/>
			<div className='form-buttons'>
				<button type='submit' className='add-todo-btn'>
					{editItem ? 'Edit Todo' : 'Add Todo'}
				</button>
				<button type='reset' onClick={clearList} className='clear-list-btn'>
					Clear List
				</button>
			</div>
			<ToastContainer />
		</form>
	);
};

export default InputForm;
