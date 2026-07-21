// import React from 'react';
import './Todo.css';
import { useEffect, useState } from 'react';
// import { FaCheck } from 'react-icons/fa6';
// import { MdDeleteForever } from 'react-icons/md';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDtae from './TodoDtae';

const Todo = () => {
	
	const [task, setTask] = useState([]);
	

	

	const handleFormSubmit = (inputValue) => {
		// event.preventDefault();

		if (!inputValue) return;

		if (task.includes(inputValue)) {
			
			return;
		}

		setTask((preTask) => [...preTask, inputValue]);

		
	};

	
	const handleDeleteTodo = (value) => {
		console.log(task);
		console.log(value);
		// const updatedTask=task.filter((curTask)=>curTask ===value);
		const updatedTask=task.filter((curTask)=>curTask !==value);
		setTask(updatedTask)
	};

	const handleClearTodo=()=>{
		setTask([])
	}

	return (
		<>
			<header className="todo-container">
				<h1>Todo List</h1>
				<TodoDtae/>
			</header>

			<TodoForm onAddTodo={handleFormSubmit} />

			<section className="myUnOrdList">
				<ul>
					{task.map((curTask, index) => {
						return (
							<TodoList
								key={index}
								data={curTask}
								onHandleDeleteTodo={handleDeleteTodo}
							/>
						);
					})}
				</ul>
			</section>

			<section className="clear-section">
				<button
					className="clear-btn"
					onClick={() => handleClearTodo()}>
					Clear All
				</button>
			</section>
		</>
	);
};

export default Todo;
