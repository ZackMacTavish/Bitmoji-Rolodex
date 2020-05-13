import React from 'react';

import './card.styles.css';

//pulls data from robohash website to display robots based on the map array id number and styles them based on card.styles.css

export const Card = (props) => (
<div className='card-container'>
<img 
alt='monster'
src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} 
/>
<h2> {props.monster.name} </h2>
<p> {props.monster.email} </p>
</div>

);