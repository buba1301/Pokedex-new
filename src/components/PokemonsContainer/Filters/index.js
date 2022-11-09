import classNames from 'classnames';
import React, { useState } from 'react';

import s from './Filter.module';

const filters = ['types', 'attack', 'experience'];

const filtersValues = {
  types: [
    'Bug',
    'Dark',
    'Dragon',
    'Electric',
    'Normal',
    'Rock',
    'Fairy',
    'Fighting',
    'Poison',
    'Ground',
  ],
  attack: ['50000', '100000', '150000'],
  experience: ['50000', '100000', '150000'],
};

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
          >
            {filter}
            <span>1</span>
          </button>

          {isOpen === filter && (
            <ul className={s.filtersMenu}>
              {filtersValues[filter].map((value) => (
                <li className={s.dropDownInput} key={value}>
                  <label htmlFor={value}>
                    <input
                      id={value}
                      type='checkbox'
                      className={s.inputCheckbox}
                    />
                    {value}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </form>
  );
};

export default Filters;
