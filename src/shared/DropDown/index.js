import React, { useState } from 'react';
import cn from 'classnames';

import s from './DropDown.module';

const DropDown = ({ children, isOpen, openNav }) => {
  console.log('RENDER DropDown');

  const navClass = cn(s.nav, {
    [s.openNav]: isOpen,
    [s.closeNav]: !isOpen,
  });

  return (
    <div className={navClass} aria-label='Main'>
      {children}
    </div>
  );
};

export default DropDown;
