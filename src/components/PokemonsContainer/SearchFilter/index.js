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
      />
    </form>
  );
};

export default Search;
