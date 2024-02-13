import React from 'react';
import style from './WorkersListHeader.module.scss';
import itemStyle from '../workers_item/WorkersItem.module.scss';
import { Link } from 'react-router-dom';

const WorkersListHeader = () => {
  return (
    <li className={style.workersListHeader}>
      <div className={[itemStyle.item, style.workersListHeaderContainer].join(' ')}>
        <div className={itemStyle.name}>
          ФИО
        </div>
        <div className={itemStyle.position}>
          Должность
        </div>
        <div className={itemStyle.phone}>
          Телефон
        </div>
        <div className={itemStyle.birthdate}>
          Дата рождения
        </div>
      </div>
    </li>
  );
};

export default WorkersListHeader;