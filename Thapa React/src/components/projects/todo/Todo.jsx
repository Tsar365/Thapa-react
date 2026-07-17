// import React from 'react';
import './Todo.css';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';

const Todo = () => {
	const [inputValue, setInputValue] = useState('');
	const [task, setTask] = useState([]);
	const [dateTime, setDateTime]=useState("");

	const handleInputChange = (value) => {
		setInputValue(value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (!inputValue) return;

		if (task.includes(inputValue)) {
			setInputValue('');
			return;
		}

		setTask((preTask) => [...preTask, inputValue]);

		setInputValue('');
	};

	useEffect(()=>{
		const interval = setInterval(() => {
			const now = new Date();
			const formattedDate = now.toLocaleDateString();
			const formattedTime = now.toLocaleTimeString();

			setDateTime(`${formattedDate} - ${formattedTime}`);
		}, 1000);

		return ()=>clearInterval(interval);
	},[]);


	return (
		<>
			<header className="todo-container">
				<h1>Todo List</h1>
				<h2 className='date-time'>{dateTime}</h2>
			</header>

			<section className="form">
				<form
					action="#"
					onSubmit={handleFormSubmit}>
					<div>
						<input
							type="text"
							className="todo-input"
							autoComplete="off"
							value={inputValue}
							onChange={(event) => handleInputChange(event.target.value)}//we can get the value from this
						/>
					</div>

					<div>
						<button
							type="submit"
							className="todo-btn">
							Add Task
						</button>
					</div>
				</form>
			</section>

			<section className="myUnOrdList">
				<ul>
					{task.map((curTask, index) => {
						return (
							<li
								key={index}
								className="todo-item">
								<span>{curTask}</span>
								<button className="check-btn">
									<FaCheck />
								</button>

								<button className="delete-btn">
									<MdDeleteForever />
								</button>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};

export default Todo;
