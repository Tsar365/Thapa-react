import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';

const TodoList = ({ key, data, onHandleDeleteTodo }) => {
	return (
		<div>
			<li
				key={key}
				className="todo-item">
				<span>{data}</span>
				<button className="check-btn">
					<FaCheck />
				</button>

				<button
					className="delete-btn"
					onClick={() => onHandleDeleteTodo(data)}>
					<MdDeleteForever />
				</button>
			</li>
		</div>
	);
};

export default TodoList;
