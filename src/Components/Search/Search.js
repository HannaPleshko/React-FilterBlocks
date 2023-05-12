import React from 'react';
import { Input } from '@mantine/core';
import style from './style.module.css';

function Search({ setSearchString }) {

  return (
    <div className={style['wrapper']}>
      <Input onChange={(event) => setSearchString(event.target.value)} placeholder="Your email" />
    </div>
  );
}

export default Search;
