import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({ list }) => {
  return (
    <>
      <h1>Pokedex</h1>
      {list.map(({ id, name, type, base_experience }, k) => (
        <Pokecard id={id} name={name} type={type} exp={base_experience} />
      ))}
      {/* <Pokecard /> */}
    </>
  );
};

export default Pokedex;
