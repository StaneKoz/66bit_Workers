import React, { FC } from 'react';
import style from './WorkersItem.module.scss';
import { IWorkerItem } from '../types/IWorkerItem';
import { Link } from 'react-router-dom';
import { convertDate } from '../../../../helpers/convertDate';

interface IWorkersItemProps {
  worker: IWorkerItem
}

const WorkersItem: FC<IWorkersItemProps> = ({ worker }) => {
  const birthdate = convertDate(worker.birthdate);

  return (
    <div className={style.item}>
      <div className={style.name}>
        {worker.name}
      </div>
      <div className={style.position}>
        {worker.position}
      </div>
      <div className={style.phone}>
        {worker.phone}
      </div>
      <div className={style.birthdate}>
        {birthdate}
      </div>
    </div>
  );
};

export default WorkersItem;