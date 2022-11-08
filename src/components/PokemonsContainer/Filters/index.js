import classNames from 'classnames';
import React, { useState } from 'react';

import s from './Filter.module';

const filters = ['1', '2', '3'];

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('RENDER FILTERS');

  const handleOpenMenu = (e) => {
    const filterType = e.target.id;

    console.log('OPEN DROP DOwn');

    setIsOpen((prevState) =>
      prevState !== filterType ? filterType : false
    );
  };

  return (
    <form className={s.container}>
      {filters.map((filter) => (
        <div key={filter} className={s.dropDown}>
          <button
            className={s.dropBtn}
            type='button'
            id={filter}
            onClick={handleOpenMenu}
          ></button>
          {isOpen === filter && (
            <ul className={s.filtersMenu}>
              <li className={s.dropDownInput}>
                <label>
                  <input
                    type='checkbox'
                    className={s.inputCheckbox}
                  />
                  Checkbox
                </label>
              </li>
            </ul>
          )}
        </div>
      ))}
    </form>
  );
};

export default Filters;
