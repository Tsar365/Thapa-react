// import React from 'react';
import seriesData from './api/seriesData.json'
import SeriesCard from './components/seriescard/SeriesCard';

const Movie = () => {
  // console.log('Movie rendered');
  return (
		<>
			
				<ul>
					{seriesData.map((item) => {
						return (
							<SeriesCard
								key={item.id}
								item={item}
							/>
						);
					})}
				</ul>
			
		</>
	);
};

export default Movie;



