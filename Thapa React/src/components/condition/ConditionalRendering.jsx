// Named Export Import. We can use multiple funcion in one compoonent and export-import them

//* Way---> 1
 export const ConditionalRendering=()=>{
 let age=18;

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
				<button>{age >= 18 ? 'Watch Now' : 'Availabe'}</button>
				<p>this is used for as an example of Named Export Import</p>
			</div>
		</>
	);
 }

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

//* Way---> 3

//  export const ConditionalRendering = () => {
// 	let age = 19;

// 	const canWatch = () => {
// 		if (age >= 18) {
// 			return 'Watch now';
// 		} else {
// 			return 'Not availabe';
// 		}
// 	};

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
// 				<button>{canWatch()}</button>
// 			</div>
// 		</>
// 	);
// };

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


export const Footer=()=>{
	return (
		<>
			<div>
				<img
					src="./footer.jpeg"
					alt="footer"
					width="600"
					height="300"
				/>
			</div>
			<p>This is footer. Used as an example for Named Export Import</p>
		</>
	);
}
