import React from 'react';
import { Home } from '@pages';
import Layout from './Layout';

import './styles';

const App = () => {
  console.log('Starting App');
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
