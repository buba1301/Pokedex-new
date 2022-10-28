import React from 'react';

import s from './Header.module';

const menuNames = ['Home', 'Pokedex', 'Legendaries', 'Documentation'];

const Header = () => {
  console.log('Render header');

  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>
      <nav className={s.nav}>
        <ul>
          {menuNames.map((name) => (
            <li key={name} className={s.navItem}>
              <a href='' className={s.link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
