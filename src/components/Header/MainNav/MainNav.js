import React, { useState } from 'react';

import s from './MainNav.module';

const menuNames = ['Home', 'Pokedex', 'Legendaries', 'Documentation'];

const MainNav = () => {
  console.log('REBDER NAV');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={s.nav} aria-label='Main'>
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
  );
};

export default MainNav;
