import React from 'react';
import { Input, Button } from '@mantine/core';
import style from './style.module.css';
import { IconSearch } from '@tabler/icons-react';

function Search({ setSearchString }) {
  return (
    <div className={style['wrapper']}>
      <Input className={style['search-inp']} icon={<IconSearch />}
        onChange={(event) => setSearchString(event.target.value)}
        placeholder="Your email"
        rightSection={
          <Button className={style['search-btn']}>Поиск</Button>
        }
      />
    </div>
  );
}

export default Search;
