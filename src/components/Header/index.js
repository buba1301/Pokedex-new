import React from 'react';

import s from './Header.module';

const Header = () => {
  console.log('Render header');

  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>
      <nav className={s.nav}>
        <ul>
          <li className={s.navItem}>Home</li>
          <li className={s.navItem}>Pokedex</li>
          <li className={s.navItem}>Legendaries</li>
          <li className={s.navItem}>Documentation</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
