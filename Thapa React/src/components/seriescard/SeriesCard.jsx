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
				<h3 style={{ margin: '1.2rem 0' }}>Rating:{item.rating}</h3>
				<p style={{ margin: '1.2rem 0' }}>Summddddddddddary:{item.description}</p>
				<p style={{ margin: '1.2rem 0' }}>Genre: {item.genre}</p>
				<p style={{ margin: '1.2rem 0' }}>Cast: {item.cast}</p>

				{/* <h3>Rating: {rating}</h3>

				<p>Summary: {description}</p>

				<p>Genre: {genre.join(', ')}</p>

				<p>Cast: {cast.join(', ')}</p> */}

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