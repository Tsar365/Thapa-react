import './EV.css';
export const EventPropagation = () => {

	const handleGrandParent = () => {
		console.log('GrandParent clicked');
	};

	const handleParentClick = () => {
		console.log('Parent clicked');
	};

	const handleChildClick = (event) => {
		// console.log(event);
		event.stopPropagation(); //The event stops at the button and does not reach the parent.
		console.log('Child clicked');
	};
	return (
		<section className="main-div">
			<div
				className="g-div"
				onClick={handleGrandParent}>
				{/* onClickCapture={handleGrandParent}> */}
          Grand Parent div
				<div
					className="p-div"
					onClick={handleParentClick}>
             {/* onClickCapture={handleParentClick} */}
            Parent Div
					<button
						className="c-div"
						onClick={handleChildClick}>
               {/* onClickCapture={handleChildClick} */}
						Child Div
					</button>
				</div>
			</div>
		</section>
	);
};
