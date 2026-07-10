// import React from 'react';
import './State.css';

const WrongState = () => {
	let value = 0;

	const handleButtonClick = () => {
		value++;
		console.log(value);
	};

	return (
		<div className="container">
			<div className="card">
				<h1 className="title">{value}</h1>

				<button
					className="btn"
					onClick={handleButtonClick}>
					Increment
				</button>

				<p className="note">Open the console to see the value increasing.</p>
			</div>
		</div>
	);
};

export default WrongState;