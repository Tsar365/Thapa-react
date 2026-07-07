
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
			<NetflixSeries />
			<NetflixSeries />
      <Sony />
		</>
	);
}

export default App

const NetflixSeries=()=>{
  return(
    <>
    <div>
      <img src="/netflix.jpeg" alt="netflix" width="600" height="300"/>
    </div>
    <h2>Name: Stranger Things</h2>
    <h3>Genre: Science Fiction</h3>
    <p>Stranger Things is a popular Netflix series that combines supernatural elements with 1980s nostalgia.</p>
    </>
  )
}

const Sony=()=>{
  const name="Stranger Things"
  const genre="Science Fiction"
  const description="Stranger Things is a popular Netflix series that combines supernatural elements with 1980s nostalgia."
  const getValue=()=>{
    const value="Nice Value"
    return value
  }
  return(
    <>
    <div>
      <img src="/sony.png" alt="sony" width="600" height="300"/>
    </div>
    <h2>Name:{ name }</h2>
    <h3>Genre: { genre }</h3>
    <p>{ description }</p>
    <h3>Rating: {5 + 3.2}</h3>
    <p>Value from function: {getValue()}</p>
    </>
  )
}
