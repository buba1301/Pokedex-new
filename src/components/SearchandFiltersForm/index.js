import React from 'react';
import CardsSection from './CardsSections';
import Filters from './Filters';
import Pagination from './Pagination';
import Search from './Search';

const SearchandFiltersForm = () => {
  return (
    <>
      <h1>Pokedex</h1>
      <div>
        <form>
          <Search />
          <Filters />
        </form>
        <CardsSection />
        <Pagination />
      </div>
    </>
  );
};

export default SearchandFiltersForm;
