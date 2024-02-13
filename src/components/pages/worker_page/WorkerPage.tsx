import React, { useContext, useEffect } from 'react';
import style from './WorkerPage.module.scss';
import { useLoaderData } from 'react-router-dom';
import { IWorkerItem } from '../workers_page/types/IWorkerItem';
import { convertDate } from '../../../helpers/convertDate';
import { NestingContext } from '../../root/Root';

const WorkerPage = () => {
  const worker = useLoaderData() as IWorkerItem;
  const birthDate = convertDate(worker.birthdate);
  const employmentDate = convertDate(worker.dateOfEmployment);
  const { nestingPath } = useContext(NestingContext);
  const nestingLevel = nestingPath.length();

  useEffect(() => {
    nestingPath.set(nestingLevel, "Список сотрудников")
    nestingPath.set(nestingLevel + 1, worker.name);
    
    return () => { 
      nestingPath.filter((key: number, value: string) => false);
    }
  }, [])
  return (
    <section className={style.worker}>
      <div className={[style.workerContainer, '_container'].join(' ')}>
        <div className={style.workerHeader}>
          <div className={style.workerHeaderContainer}>
            <div className={style.workerAvatar}>
              <img src={worker.photo} alt='avatar' />
            </div>
            <h1 className={style.workerFullName}>
              {worker.name}
            </h1>
            <div className={style.workerPosition}>
              {worker.position}
            </div>
            <div className={style.workerStack}>
              {
                worker.stack.map(technology => (
                  <div className={style.workerStackItem} key={technology}>
                    {technology}
                  </div>))
              }
            </div>            
          </div>
        </div>
        <div className={style.info}>
          <h2 className={style.infoTitle}>
            Основная информация
          </h2>
          <ul className={style.infoList}>
            <li className={style.infoItem}>
              <div className={style.infoItemKey}>
                Контактный номер:
              </div>
              <div className={style.infoItemValue}>
                {worker.phone}
              </div>
            </li>
            <li className={style.infoItem}>
              <div className={style.infoItemKey}>
                Дата рождения:
              </div>
              <div className={style.infoItemValue}>
                {birthDate}
              </div>
            </li>
            <li className={style.infoItem}>
              <div className={style.infoItemKey}>
                Дата устройства:
              </div>
              <div className={style.infoItemValue}>
                {employmentDate}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkerPage;