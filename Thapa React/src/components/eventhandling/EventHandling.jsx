// import React from 'react';

const EventHandling = () => {
	// function handleButtonClick(){
	//   alert("Hey I am onclick event");
	// }

	const handleButtonClick = (event) => {
		console.log(event);
		alert('hello');
	};

  const handleWelcome=(user)=>{
console.log(`hello ${user}, welcome to me`);

    alert(`hello ${user}, welcome to me`);
    //!use backtik(``) in dynamic value

  }

	return (
		<div>
			<button onClick={handleButtonClick}>click me</button>
			{/* <button onClick={handleButtonClick()}>click me</button> */}
			//! {/* Auto call hye zabe */}
			<br />
			<button onClick={(event) => handleButtonClick(event)}>Click me 2</button>
			<br />
			<button onClick={(event) => console.log(event)}>Click me 3</button>
			//*handleButtonClick=(event) call na kreo event pass kra zy
			<br />
			<button onClick={() => alert('I am inline event')}>click me 4</button>
			//* alart without function
      <br/>
      <button onClick={()=>handleWelcome("Ehsan")}>Click me 4</button>
		</div>
	);
};

export default EventHandling;
