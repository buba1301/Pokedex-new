import React from 'react';
import cn from 'classnames';

import s from './MobileFilterMenu.module';
import Checkbox from '../../../../shared/CheckBox';

// добавить чекбоксы для типов

const MobileFilterMenu = ({ types }) => {

  return (
    <form className={s.root}>
      <section className={s.typesSection}>
        <h1 className={s.header}>Type</h1>
        <ul className={s.typesList}>
          {types.map((type) => (
            <li key={type}>
              <Checkbox value={type} />
            </li>
          ))}
        </ul>
      </section>

      <section className={s.typesSection}>
        <h1 className={s.header}>Attack</h1>
        <div className={s.inputsWrap}>
          <label htmlFor='attackFrom'>
            From
            <input
              id='attackFrom'
              name='attackFrom'
              type='text'
              className={s.input}
            />
          </label>

          <label htmlFor='attackTo'>
            To{' '}
            <input
              type='text'
              name='attackTo'
              id='attackTo'
              className={s.input}
            />
          </label>
          <button type='button' className={s.button}>
            Apply
          </button>
        </div>
      </section>

      <section className={s.typesSection}>
        <h1 className={s.header}>Experiens</h1>
        <div className={s.inputsWrap}>
          <label htmlFor='experiensFrom' className={s.input}>
            From
            <input
              type='text'
              name='experiensFrom'
              id='experiensFrom'
              className={s.input}
            />
          </label>

          <label htmlFor='experiensTo'>
            To{' '}
            <input
              type='text'
              name='experiensTo'
              id='experiensTo'
              className={s.input}
            />
          </label>
          <button type='button' className={s.button}>
            Apply
          </button>
        </div>
      </section>
    </form>
  );
};

export default MobileFilterMenu;
