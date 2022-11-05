import React from 'react';

import s from './CardsSection.module';

const cards = new Array(9).fill('card');

const CardsSection = () => {
  return (
    <section className={s.root}>
      {cards.map((card) => (
        <div key={card} className={s.card}></div>
      ))}
    </section>
  );
};

export default CardsSection;
