import React, { FC } from 'react';
import style from './FilterOptions.module.scss';
import { FilterOption } from '../types/FilterOptions';
import { IFilterOption } from '../types/IFilterOption';
import FilterOptionsItem from '../filterOptionsItem/FilterOptionsItem';

interface IFilterOptionsListProps {
  options: IFilterOption[]
}

const FilterOptionsList:FC<IFilterOptionsListProps> = ({ options }) => {

  return (
    <ul className={style.optionsList}>
      {
        options.map((item) => (
          <li className={style.optionsItem} key={item.option.key}>
            <FilterOptionsItem item={item}/>
          </li>
        ))
      }
    </ul>
  );
};

export default FilterOptionsList;