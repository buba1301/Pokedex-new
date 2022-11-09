import React from 'react';
import { useLoaderData } from 'react-router-dom';

import s from './CardsSection.module';

const CardsSection = () => {
  const { data } = useLoaderData();

  console.log('CardsSection', data);

  return (
    <section className={s.root}>
      {data.map(({ name }) => (
        <div key={name} className={s.card}>
          {name}
        </div>
      ))}
    </section>
  );
};

export default CardsSection;
