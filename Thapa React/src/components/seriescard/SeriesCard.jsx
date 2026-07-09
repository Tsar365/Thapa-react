// import React from 'react';

const SeriesCard = ({item}) => {
  // const {id,img_url,name,rating}=item;
  console.log(item)
  return (
		<div>
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
			
			
		</div>
	);
};

export default SeriesCard;