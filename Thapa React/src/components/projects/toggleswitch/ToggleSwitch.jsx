import { useState } from 'react';
import './ToggleSwitch.css';

export const ToggleSwitch = () => {
	const [isOn, setIsOn] = useState(false);

	const handleToggleSwitch = () => {
		setIsOn(!isOn);
	};


	return (
		<div
			className="toggle-switch"
			style={{
				background: isOn
					? 'linear-gradient(135deg, #22c55e, #16a34a)'
					: 'linear-gradient(135deg, #ef4444, #dc2626)',
			}}
			onClick={handleToggleSwitch}>
			<div className={`switch ${isOn ? 'on' : 'off'}`}>
				<span className="switch-state">{isOn ? 'ON' : 'OFF'}</span>
			</div>
		</div>
	);
};
