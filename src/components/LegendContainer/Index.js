import React from 'react';
import Description from './Description/Description';

import s from './LegendContainer.module';
import Slider from './Slider/Slider';

const Legend = () => {
  console.log('Rendering Legend');

  return (
    <section className={s.root}>
      <h1>Legendaries</h1>
      <div className={s.info}>
        <div className={s.imgContainer}>Img</div>
        <div className={s.descriptions}>
          <Description />
        </div>
      </div>
      <div className={s.sliderWrap}>
        <Slider />
      </div>
    </section>
  );
};

export default Legend;
