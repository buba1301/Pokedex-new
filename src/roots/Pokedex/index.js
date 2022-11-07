import React from 'react';
import config from '../../api';
import PokemonsContainer from '../../components/PokemonsContainer';

export const loader = async () => {
  const pokemonsList = await config.getPokemons();
  return { pokemonsList };
};

const Pokedex = () => {
  console.log('RENDER POKEDEX');

  return (
    <main>
      <PokemonsContainer />
    </main>
  );
};

export default Pokedex;
