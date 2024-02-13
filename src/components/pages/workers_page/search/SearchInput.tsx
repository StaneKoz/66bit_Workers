import React, { useState } from 'react';
import style from './SearchInput.module.scss';

const SearchInput = () => {
  const [value, setValue] = useState<string>('');

  return (
    <input className={style.input} type='search' name='Name' value={value} onChange={ev => setValue(ev.target.value)} form={"123"} 
      placeholder='Поиск'
    />
  );
};

export default SearchInput;