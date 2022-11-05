import React from 'react';

import s from './LegendContainer.module';

const Legend = () => {
  console.log('Rendering Legend');

  return (
    <section className={s.root}>
      <h1>Legendaries</h1>
      <div className={s.info}>
        <div className={s.imgContainer}>pss</div>
        <div className={s.descriptions}>pss</div>
      </div>
      <div className={s.sliderWrap}>
        <ul>
          <li />
        </ul>
      </div>
    </section>
  );
};

export default Legend;
