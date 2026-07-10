export const EventProps = () => {


	const HandleWelcomeUser = (user) => {
		alert(`Hey, ${user}`);
	};

	const handleHover = () => {
		alert(`Hey Thanks for hovering me`);
	};

	return (
		<>
			<WelcomeUser
				onButtonClick={() => HandleWelcomeUser('vinod')}
				onMouseEnter={handleHover}
			/>
			{/* Welcome component e onButtonClick & onMouseEnter ei 2 ta function pathay dlam */}
		</>
	);
};

const WelcomeUser = (props) => {
	const { onButtonClick, onMouseEnter } = props;
  // onButtonClick & onMouseEnter ei 2 ta function recieve krlam
	const handleGreeting = () => {
		console.log(`Hey User, Welcome`);
		onButtonClick();
	};
	return (
		<>
			<button onClick={onButtonClick}>Click</button>
			<button onMouseEnter={onMouseEnter}>Hover me</button>
			<button onClick={handleGreeting}>Greeting</button>
		</>
	);
};
