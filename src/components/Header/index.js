import React from 'react';

import s from './Header.module';

const Header = () => {
  console.log('Render header');

  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>
      <nav className={s.nav}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
