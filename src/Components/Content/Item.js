import React from 'react';
import style from './style.module.css';

function Item({ vacancyItem }) {
  return (
    <div className={style['wrapper']}>
      <p>{vacancyItem.vacancy}</p>
      <p>{vacancyItem.salary}</p>
      <p>{vacancyItem.workday}</p>
      <p>{vacancyItem.city}</p>
    </div>
  );
}

export default Item;
