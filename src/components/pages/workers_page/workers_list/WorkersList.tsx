import React, { FC, useContext, useEffect, useState } from 'react';
import style from './WorkerslList.module.scss';
import { IWorkerItem } from '../types/IWorkerItem';
import WorkersItem from '../workers_item/WorkersItem';
import WorkersListHeader from '../workers_list_header/WorkersListHeader';
import { Link } from 'react-router-dom';
import { WorkersContext } from '../page/WorkersPage';
import GradientLoader from '../../../ui/gradient_loader/GradientLoader';
import SpinnerLoader from '../../../ui/spinner_loader/SpinnerLoader';

interface IWorkerListProps {
  workers: IWorkerItem[]
}
const WorkersList: FC<IWorkerListProps> = ({ workers }) => {
  const { fetcherState, currentPage, fetcherData } = useContext(WorkersContext) ?? { fetcherState: 'idle', currentPage: 1, fetcherData: [] };
  const isActiveEmpty = fetcherData?.length == 0 && currentPage == 2 && fetcherState === 'idle';
  const [isActiveList, setIsActiveList] = useState<Boolean>(false);
  const [scrollBtnVisible, setScrollBtnVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsActiveList((fetcherState === 'submitting' && currentPage > 1) || fetcherState === 'idle');
  }, [fetcherState, currentPage]);
  useEffect(() => {
    document.onscroll = (ev) => scrollHandler(ev);
  }, [scrollBtnVisible])

  function scrollHandler(e: any) {
    if (e.target.documentElement.scrollTop > window.innerHeight && !scrollBtnVisible) {
      setScrollBtnVisible(true);
      setTimeout(() => {
        setScrollBtnVisible(false)
      }, 3000)
    }
  };
  return (
    <ul className={style.list}>
      <WorkersListHeader />
      {
        isActiveList && (
        workers.map(worker => (
          <li className={style.item} key={worker.id}>
            <Link to={`workers/${worker.id}`} className={style.itemLink}>
              <WorkersItem worker={worker} />
            </Link>
          </li>)))
      }
      <div className={[style.emptyList, isActiveEmpty ? style.active : ''].join(' ')}>
        Нет совпадений
      </div>
      <GradientLoader />
      <SpinnerLoader />
      <button type='button' className={[style.scrollBtn, scrollBtnVisible ? style.active : ''].join(' ')} onClick={() => {
        console.log('da')
        document.documentElement.scrollTo(0, 0);
        setScrollBtnVisible(false);
      }}>
        <div className={style.text}>Наверх</div>
      </button>
    </ul>
  );
};

export default WorkersList;