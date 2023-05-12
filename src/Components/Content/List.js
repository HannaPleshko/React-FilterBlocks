import React, { useState, useEffect } from 'react';
import Item from './Item';
import srorage from '../../storage/storage.json';

const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({ car_model }) =>
    car_model.toLowerCase().includes(searchText.toLowerCase())
  );
}

function List({ searchString }) {
  const [list, setList] = useState(srorage);

  useEffect(() => {
    console.log(searchString);

    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchString, srorage);
      setList(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchString])

  return (
    <div>
      {list.map((el, index) => (
        <Item key={index} title={el.car_model} />
      ))}
    </div>
  );
}

export default List;
