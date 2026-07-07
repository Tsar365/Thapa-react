function App() {
	return (
		<>
			<div>
				<img
					src="/phoenix.jpeg"
					alt="phoenix"
					width="600"
					height="300"
				/>
			</div>
			<h2>Name: Queen of Taers</h2>
			<h3>Role: Warrior</h3>
			<p>Queen of Taers is a powerful warrior from the kingdom of Taers.</p>
			<NetflixSeries />
			<NetflixSeries />
			<ConditionalRendering />
			<Sony />
		</>
	);
}

export default App;

const NetflixSeries = () => {
	return (
		<>
			<div>
				<img
					src="/netflix.jpeg"
					alt="netflix"
					width="600"
					height="300"
				/>
			</div>
			<h2>Name: Stranger Things</h2>
			<h3>Genre: Science Fiction</h3>
			<p>
				Stranger Things is a popular Netflix series that combines supernatural
				elements with 1980s nostalgia.
			</p>
		</>
	);
};


//* Way---> 1
// const ConditionalRendering=()=>{
//  let age=18;


//   return(
//     <>
//        <div>
// 					<img
// 						src="/condition.jpg"
// 						alt="condition"
// 						width="600"
// 						height="300"
// 					/>
// 				</div>
//     <div>
//       <button >{age>=18? "Watch Now":"Availabe"}</button>
//     </div>
//     </>
//   )
//  }

//* Way---> 2
// const ConditionalRendering = () => {
// 	let age = 19;

//   let canWatch="Not available";
//   if (age>=18){
//     canWatch="Watch now";
//   }

// 	return (
// 		<>
// 			<div>
// 				<img
// 					src="/condition.jpg"
// 					alt="condition"
// 					width="600"
// 					height="300"
// 				/>
// 			</div>
// 			<div>
// 				<button>{canWatch}</button>
// 			</div>
// 		</>
// 	);
// };


//* Way---> 2

const ConditionalRendering = () => {
	let age = 19;

	const canWatch =()=>{
	if (age >= 18) {
		return 'Watch now';
  } else{
    return "Not availabe"
  }
  }
	

	return (
		<>
			<div>
				<img
					src="/condition.jpg"
					alt="condition"
					width="600"
					height="300"
				/>
			</div>
			<div>
				<button>{canWatch()}</button>
			</div>
		</>
	);
};



//* Way---> 4
// ! **************************Not recommended***************************
// const ConditionalRendering=()=>{
//  let age=18;

//  if (age<18){
//   return(
//     <>
//        <div>
// 					<img
// 						src="/condition.jpg"
// 						alt="condition"
// 						width="600"
// 						height="300"
// 					/>
// 				</div>
//     <div>
//       <button>Not available</button>
//     </div>
//     </>
//   )
//  }
//  else{
//     return (
// 			<>
// 				<div>
// 					<img
// 						src="/condition.jpg"
// 						alt="condition"
// 						width="600"
// 						height="300"
// 					/>
// 				</div>
// 				<div>
// 					<button>Available</button>
// 				</div>
// 			</>
// 		);
//  }
// }



const Sony = () => {
	const name = 'Stranger Things';
	const genre = 'Science Fiction';
	const description =
		'Stranger Things is a popular Netflix series that combines supernatural elements with 1980s nostalgia.';
	const getValue = () => {
		const value = 'Nice Value';
		return value;
	};
	return (
		<>
			<div>
				<img
					src="/sony.png"
					alt="sony"
					width="600"
					height="300"
				/>
			</div>
			<h2>Name:{name}</h2>
			<h3>Genre: {genre}</h3>
			<p>{description}</p>
			<h3>Rating: {5 + 3.2}</h3>
			<p>Value from function: {getValue()}</p>
		</>
	);
};
