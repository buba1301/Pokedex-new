import React from 'react';
import CardsSection from './CardsSections';
import Filters from './Filters';
import Pagination from './Pagination';
import Search from './Search';

import s from './Container.module';

const PokemonsContainer = () => {
  return (
    <div className={s.root}>
      <h1>Pokedex</h1>

      <form>
        <Search />
        <Filters />
      </form>
      <CardsSection />
      <Pagination />
    </div>
  );
};

export default PokemonsContainer;
