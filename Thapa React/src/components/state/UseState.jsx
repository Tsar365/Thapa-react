// import React from 'react';
import { useState } from "react";
import './State.css';

const UseState = () => {
	const [count, setCount] = useState(0);

	const handleButtonClick = () => {
		setCount(() => count + 1);
	};

	// let array = useState();
	// console.log(array); -----> [undefined, ƒ];

	return (
		<div className="container">
			<div className="card">
				<h1 className="title">{count}</h1>

				<button
					className="btn"
					onClick={handleButtonClick}>
					Increment
				</button>

				<p className="note">
					The UI updates automatically because <code>count</code> is a React
					state.
				</p>
			</div>
		</div>
	);
};

export default UseState;





