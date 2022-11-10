import React, { useEffect } from 'react';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';

import s from './SearchFilter.module';

// добавить обработку событий поиска

const Search = () => {
  console.log('RENDER: Search');
  const { pokemonName } = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById('q').value = pokemonName;
  }, [pokemonName]);

  return (
    <Form className={s.form} id='search-form' role='search'>
      <input
        id='q'
        type='search'
        placeholder='Search Pokemon by Name'
        className={s.searchInput}
        name='q'
        defaultValue={pokemonName}
        onChange={(event) => {
          const isFirstSearch = pokemonName == null;
          submit(event.currentTarget.form, {
            replace: !isFirstSearch,
          });
        }}
      />
    </Form>
  );
};

export default Search;
