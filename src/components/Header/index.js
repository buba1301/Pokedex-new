import React from 'react';

import { ReactComponent as ReactLogo } from '../../assets/Logo.svg';

import s from './Header.module';
import MainNav from './MainNav/MainNav';

const Header = () => {
  console.log('Render header');

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <ReactLogo viewBox='0 0 60 25' />
      </div>
      <MainNav />
    </header>
  );
};

export default Header;
