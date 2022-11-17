import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './MainNav.module';
import DropDown from '../../../shared/DropDown';
import useWindowSize from '../../../hooks/useWindowSize';
import { useButton } from '../../../hooks/useButton';

const menuNames = ['Home', 'Pokedex', 'Legendaries', 'Documentation'];

// TODO: добавить закрытие по клику на ссылку для мобильной версии

const renderNav = () => (
  <nav aria-label='Main' className={s.nav}>
    <ul className={s.list}>
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
);

const MainNav = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();
  const { CloseButton, isOpen } = useButton();

  /* const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState);
  };*/

  return (
    <>
      {width >= 769 ? (
        renderNav()
      ) : (
        <DropDown isOpen={isOpen} menuType='navMenu'>
          {renderNav()}
        </DropDown>
      )}

      <CloseButton isOpen={isOpen} />
    </>
  );
};

export default MainNav;

/*

const buttonClass = cn(s.button, {
    [s.active]: isOpen,
  });

<button
        className={buttonClass}
        type='button'
        onClick={handleOpenMenu}
      >
        <span className={s.burgerMenu} />
        <span className={s.burgerMenu} />
        <span className={s.burgerMenu} />
      </button> */
