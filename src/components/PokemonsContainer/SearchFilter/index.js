import React from 'react';
import { Form } from 'react-router-dom';

import s from './SearchFilter.module';

// добавить обработку событий поиска

const Search = () => {
  console.log('RENDER: Search');

  return (
    <Form className={s.form} id='search-form' role='search'>
      <input
        id='q'
        type='search'
        placeholder='Search Pokemon by Name'
        className={s.searchInput}
        name='q'
      />
    </Form>
  );
};

export default Search;
