import NetflixSeries from './components/netflixseries/NetflixSeries';
import {
	ConditionalRendering,
	Footer,
} from './components/condition/ConditionalRendering';
import Combined, { Pheonix } from './components/combined/Combined';

function App() {
	return (
		<>
			<div>
				<img
					src="./home.jpeg"
					alt="home"
					width="600"
					height="300"
				/>
			</div>
			<h2>Name: Home</h2>
			<h3>Role: Home Page</h3>
			<p>This is Home Page</p>

			<NetflixSeries />
			<ConditionalRendering />
			<Footer />
			<Combined />
			<Pheonix />
			<Sony />
		</>
	);
}

export default App;

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
