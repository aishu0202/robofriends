import React from 'react';
import './Card.css';

const Searchbox = ( {searchfield,searchChange} ) => {
	return (
			<div>
				<input className='Search' type='search' placeholder='Search' onChange={searchChange} />
			</div>
		);
}

export default Searchbox;