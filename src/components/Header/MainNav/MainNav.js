import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './MainNav.module';

const menuNames = ['Home', 'Pokedex', 'Legendaries', 'Documentation'];

// TODO: добавить закрытие по клику на ссылку для мобильной версии

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navClass = cn(s.nav, {
    [s.openNav]: isOpen,
  });

  const buttonClass = cn(s.button, {
    [s.active]: isOpen,
  });

  return (
    <>
      <nav className={navClass} aria-label='Main'>
        <ul>
          {menuNames.map((name) => (
            <li key={name} className={s.navItem}>
              <Link
                to={`/${name !== 'Home' ? name.toLowerCase() : ''}`}
                className={s.link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={buttonClass}
        type='button'
        onClick={handleOpenMenu}
      >
        <span className={s.burgerMenu} />
        <span className={s.burgerMenu} />
        <span className={s.burgerMenu} />
      </button>
    </>
  );
};

export default MainNav;
