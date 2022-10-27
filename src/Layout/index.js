import React from 'react';
import { Header, Footer } from '@components';

import s from './Layer.module';

const Layout = ({ children }) => {
  console.log('RENDER Layout');
  return (
    <div className={s.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
