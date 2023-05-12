import { Input, Button } from '@mantine/core';
import style from './style.module.scss';

function Search() {
  return (
    <div className={style['wrapper']}>
      <Input placeholder="Your email" />
      <Button>Search</Button>
    </div>
  );
}

export default Search;
