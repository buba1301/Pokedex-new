import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import Card from '../../../shared/Card';

import s from './CardsSection.module';

const getLimitValue = (width) => {
  if (width > 1024) {
    return 9;
  }

  if (width >= 820) {
    return 12;
  }
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
