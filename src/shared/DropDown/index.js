import React, { useState } from 'react';
import cn from 'classnames';

import s from './DropDown.module';

const DropDown = ({ children, isOpen, menuType }) => {
  const navClass = cn(s.root, s[menuType], {
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
