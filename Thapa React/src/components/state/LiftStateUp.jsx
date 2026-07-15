import { useState } from 'react';
import './LiftStateUp.css';

export const LiftStateUp = () => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div className="container">
			<div className="card">
				<h2 className="title">Lift State Up</h2>

				<InputComponent
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>

				<DisplayComponent inputValue={inputValue} />
			</div>
		</div>
	);
};

const InputComponent = ({ inputValue, setInputValue }) => {
	return (
		<input
			className="input"
			type="text"
			placeholder="Enter your name"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
		/>
	);
};

const DisplayComponent = ({ inputValue }) => {
	return (
		<p className="display">
			The current input value is: <span className="value">{inputValue}</span>
		</p>
	);
};

