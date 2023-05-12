import React, { useState } from 'react';
import List from '../../Components/Content/List';
import Search from '../../Components/Search/Search';
import style from './style.module.css';

function HomePage() {
  const [searchString, setSearchString] = useState('');

  return (
    <div className={style['wrapper']}>
      <Search setSearchString={setSearchString} />
      <List searchString={searchString} />
    </div>
  );
}

export default HomePage;
