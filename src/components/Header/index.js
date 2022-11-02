import React from 'react';

import s from './Header.module';
import MainNav from './MainNav/MainNav';

const Header = () => {
  console.log('Render header');

  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>
      <MainNav />
    </header>
  );
};

export default Header;
