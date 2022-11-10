import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';

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
  const { data } = useLoaderData();
  const { width } = useWindowSize();

  console.log('CardsSection', width);

  const [limit, setLimit] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLimit(getLimitValue(width));
  }, [limit, width]);

  const dataSlice = data.slice(offset, limit);

  return (
    <section className={s.root}>
      {dataSlice.map(({ name }) => (
        <div key={name} className={s.card}>
          {name}
        </div>
      ))}
    </section>
  );
};

export default CardsSection;
