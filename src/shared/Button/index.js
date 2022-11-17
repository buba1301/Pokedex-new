import React from 'react';
import cn from 'classnames';

import s from './Button.module';

const Button = ({ isOpen, onClick }) => {
  const buttonClass = cn(s.button, {
    [s.active]: isOpen,
  });

  return (
    <button className={buttonClass} type='button' onClick={onClick}>
      <span className={s.burgerMenu} />
      <span className={s.burgerMenu} />
      <span className={s.burgerMenu} />
    </button>
  );
};

export default Button;
