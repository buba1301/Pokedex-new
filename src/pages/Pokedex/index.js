import React from 'react';
import PokemonsContainer from '../../components/PokemonsContainer';

<<<<<<< HEAD:src/pages/Pokedex/index.js
=======
export const loader = async () => {
  const pokemonsList = await config.getPokemons();
  return { pokemonsList };
};

//TODO: как запрашивать необходиое количество в зависимости от размера экрана

>>>>>>> b02ed70... Add filters buttons and checkbox:src/roots/Pokedex/index.js
const Pokedex = () => {
  console.log('RENDER POKEDEX');
  return (
    <main>
      <PokemonsContainer />
    </main>
  );
};

export default Pokedex;
