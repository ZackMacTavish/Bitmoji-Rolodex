import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

//Takes the map array from the json file and separates it into 4 columns pulling from the card-list-styles.css

export const CardList = props => (
    <div className='card-list'>
    {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))} 
   </div>
);

