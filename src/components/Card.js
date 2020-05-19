import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} width="200" height="200" alt='photo1'/>
      <div>
        <h2> {props.name} </h2>
        <p> {props.email} </p>
      </div>
    </div>
  );
}

export default Card;