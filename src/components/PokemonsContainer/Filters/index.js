import React, { useState } from 'react';
import { useButton } from '../../../hooks/useButton';
import useWindowSize from '../../../hooks/useWindowSize';
import Checkbox from '../../../shared/CheckBox';
import DropDown from '../../../shared/DropDown';

import s from './Filter.module';
import MobileFilterMenu from './MobileFilterMenu';

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
  attack: ['0-30', '30-50', '50-100', '>100'],
  experience: ['0-30', '30-50', '50-100', '>100'],
};

//TODO: вынести button в отдельный элемент
//TODO: выпадающее меню для мобильной версии с фильтрами
// TODO: запрос отфильтрованных данных
// TODO: если поиск то сброс фильтров
// TODO: сохранять фильтры при закрытии меню если выбран чекбокс
// TODO: кнопка сброса фильтров
// TODO: удалить крестик в сафари

const Filters = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowSize();

  const { isOpen, onClick, CloseButton } = useButton();

  const handleOpenMenu = (e) => {
    const filterType = e.target.id;

    setIsOpen((prevState) =>
      prevState !== filterType ? filterType : false
    );
  };

  return (
    <form className={s.container}>
      {width >= 820 ? (
        filters.map((filter) => (
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
                    <Checkbox value={value} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <>
          <div className={s.dropDown}>
            <button
              className={s.dropBtn}
              type='button'
              id='filters'
              onClick={onClick}
            >
              Filters
              <span>1</span>
            </button>
          </div>
          <DropDown isOpen={isOpen} menuType='filterMenu'>
            <MobileFilterMenu types={filtersValues.types} />
            <div className={s.closeBtn}>
              <CloseButton />
            </div>
          </DropDown>
        </>
      )}
    </form>
  );
};

export default Filters;
