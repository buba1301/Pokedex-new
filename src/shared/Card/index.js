import React from 'react';

import s from './Card.module';

const Card = ({ name, types, stats, sprites }) => {
  console.log('RENDER Card', sprites.front_shiny);

  return (
    <div key={name} className={s.card}>
      <div className={s.stats}>{name}</div>
      <div className={s.image}>
        <img
          src={sprites.other.dream_world.front_default}
          alt='Pokemon'
          width='235'
          height='135'
        />
      </div>
    </div>
  );
};

export default Card;
