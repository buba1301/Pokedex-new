import React from 'react';
import CardsSection from './CardsSections';
import Filters from './Filters';
import Pagination from './Pagination';
import Search from './SearchFilter';

import s from './Container.module';

const PokemonsContainer = () => {
  console.log('RENDER PokemonsContainer');

  return (
    <main className={s.root}>
      <h1>800 Pokemons for you to choose your favorite</h1>
      <Search />
      <Filters />
      <CardsSection />
      <Pagination />
    </main>
  );
};

export default PokemonsContainer;
