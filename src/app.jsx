import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Pokedex, NoMatch, Legendaries, Docs } from '@pages';
import Layout from './Layout';

import './styles';

const App = () => {
  console.log('Starting App');
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route index element={<Pokedex />} />
        <Route path='legendaries' element={<Legendaries />} />
        <Route path='documentation' element={<Docs />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;

// path='pokedex'
