import React, { useState } from 'react';
import List from '../../Components/Content/List';
import Search from '../../Components/Search/Search';

function HomePage() {
  const [searchString, setSearchString] = useState('');

  return (
    <div>
      <Search setSearchString={setSearchString} />
      <List searchString={searchString} />
    </div>
  );
}

export default HomePage;
