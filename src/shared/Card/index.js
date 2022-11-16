/* eslint-disable camelcase */
import React from 'react';
import cn from 'classnames';

import s from './Card.module';

//TODO: name is capitalize
//TODO: backround how??

const Card = ({ name, types, stats, sprites }) => {
  const statsList = [stats[1], stats[2]];

  const firstType = types[0].type.name;

  const imageClassNames = cn(s.image, s[firstType]);

  console.log('RENDER Card', statsList);

  return (
    <div key={name} className={s.card}>
      <div className={s.stats}>
        <h5>{name}</h5>
        <div className={s.statWrap}>
          {statsList.map(({ stat, base_stat }) => (
            <div key={stat.name}>
              <div className={s.base}>{base_stat}</div>
              <span className={s.stat}>{stat.name}</span>
            </div>
          ))}
        </div>
        <div className={s.typesWrap}>
          {types.map(({ type }) => (
            <span key={type.name} className={s[type.name]}>
              {type.name}
            </span>
          ))}
        </div>
      </div>
      <figure className={imageClassNames}>
        <img
          src={sprites.other.dream_world.front_default}
          alt='Pokemon'
          width='235'
          height='135'
        />
      </figure>
    </div>
  );
};

export default Card;
