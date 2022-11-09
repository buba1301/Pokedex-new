import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@components';

import s from './Layer.module';

const Layout = () => {
  console.log('RENDER Layout');

  return (
    <div className={s.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
