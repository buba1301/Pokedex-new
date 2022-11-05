import React from 'react';

import s from './LegendContainer.module';

const Legend = () => {
  return (
    <section className={s.root}>
      <h1>Legendaries</h1>
      <div className={s.info}>
        <div className={s.imgContainer}></div>
        <div className={s.descriptions}></div>
      </div>
      <div>
        <ul>
          <li />
        </ul>
      </div>
    </section>
  );
};

export default Legend;
