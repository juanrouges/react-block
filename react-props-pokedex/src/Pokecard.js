import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, exp }) => {
  const imgUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  return (
    <div className="Pokecard">
      <h2>{name}</h2>
      <img src={`${imgUrl}${id}.png`} alt={name} />
      <p>{type}</p>
      <p>{exp}</p>
    </div>
  );
};

export default Pokecard;
