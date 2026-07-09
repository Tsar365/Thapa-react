// import React from 'react';
import seriesData from './api/seriesData.json'

const Movie = () => {
  return (
		<>
			<ul>
				{seriesData.map((item) => {
					return (
						<li key={item.id}>
							<div>
								<img
									src={item.img_url}
									alt={item.name}
									width="40%"
									height="40%"
								/>
							</div>
							<h2>Name: {item.name}</h2>
							<h3>Rating:{item.rating}</h3>
							<p>Summary:{item.description}</p>
							<p>Genre: {item.genre}</p>
							<p>Cast: {item.cast}</p>
							<a
								href={item.watch_url}
								target="_blank"
								rel="noreferrer">
								<button>Watch Now</button>
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Movie;