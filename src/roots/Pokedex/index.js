import React from 'react';
import config from '../../api';
import PokemonsContainer from '../../components/PokemonsContainer';

export const loader = async () => {
  const pokemonsList = await config.getPokemons();

  const urls = pokemonsList.results.map(({ name }) =>
    config.getPokemonByName(name)
  );

  const data = await Promise.all(urls);

  console.log('DATA', data);

  return { data };
};

//TODO: как запрашивать необходиое количество в зависимости от размера экрана

const Pokedex = () => {
  console.log('RENDER POKEDEX');

  return (
    <main>
      <PokemonsContainer />
    </main>
  );
};

export default Pokedex;
