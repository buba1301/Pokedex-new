import React from 'react';

import s from './SearchFilter.module';

const Search = () => {
  console.log('RENDER Search');

  return (
    <form className={s.form}>
      <input
        type='search'
        className={s.input}
        placeholder='Search Pokemon'
        className={s.searchInput}
      />
    </form>
  );
};

export default Search;
