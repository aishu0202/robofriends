import React from 'react';
import Card from './Card';

const Cardlist = ({contact}) => {
	return(
		<div>
		{
			contact.map((user,i) => {
				return(
				<Card 
					key={i} 
					id={contact[i].id} 
					image={contact[i].avatar} 
					name={contact[i].first_name} 
					email={contact[i].email}
				/>
				);
			})
		}
	   </div>
	   );
}

export default Cardlist;