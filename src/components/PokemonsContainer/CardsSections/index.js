import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import Card from '../../../shared/Card';

import s from './CardsSection.module';

const getLimitValue = (width) => {
  if (width > 1024) {
    console.log('getLimitValue', width);
    return 9;
  }

  if (width >= 820) {
    return 12;
  }
  console.log('!!!');
  return 10;
};

const CardsSection = () => {
  const [limit, setLimit] = useState();
  const [offset, setOffset] = useState(0);

  const { data } = useLoaderData();
  const { width } = useWindowSize();

  useEffect(() => {
    setLimit(getLimitValue(width));
  }, [limit, width]);

  const dataSlice = data.slice(offset, limit);

  console.log('CardsSection', dataSlice);

  return (
    <section className={s.root}>
      {dataSlice.map(({ name, id, types, stats, sprites }) => (
        <Card
          name={name}
          key={id}
          types={types}
          sprites={sprites}
          stats={stats}
        />
      ))}
    </section>
  );
};

export default CardsSection;
