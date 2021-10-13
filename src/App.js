import React from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import { GlobalContextProvider } from './context/GlobalState';
import './App.css';

function App() {
	return (
		<GlobalContextProvider>
			<div className='App'>
				<Header />
				<InputForm />
				<TodoList />
			</div>
		</GlobalContextProvider>
	);
}

export default App;
