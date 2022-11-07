import React from 'react';
import { useLoaderData } from 'react-router-dom';

import s from './CardsSection.module';

// const cards = new Array(9).fill('card');

const CardsSection = () => {
  const { pokemonsList } = useLoaderData();

  return (
    <section className={s.root}>
      {pokemonsList.results.map(({ name }) => (
        <div key={name} className={s.card}>
          {name}
        </div>
      ))}
    </section>
  );
};

export default CardsSection;
