import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Home, Pokedex, NoMatch, Legendaries, Info } from '@roots';

import { loader as pokedexLoader } from './roots/Pokedex';

import Layout from './Layout';

import './styles';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />} />
      <Route index element={<Pokedex />} loader={pokedexLoader} />
      <Route path='legendaries' element={<Legendaries />} />
      <Route path='documentation' element={<Info />} />
      <Route path='*' element={<NoMatch />} />
    </Route>
  )
);

const App = () => {
  console.log('Starting App');
  return <RouterProvider router={router} />;
};

export default App;

// path='pokedex'
