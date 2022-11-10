import React from 'react';
import config from '../../api';
import PokemonsContainer from '../../components/PokemonsContainer';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get('q');

  console.log('POKEDEX LOADER', pokemonName);

  const data = await config.getPokemons(pokemonName);

  console.log('POKEDEX LOADER DATA', data);

  return { data, pokemonName };
};

//TODO: как запрашивать необходиое количество в зависимости от размера экрана

const Pokedex = () => {
  console.log('RENDER POKEDEX');

  return <PokemonsContainer />;
};

export default Pokedex;
