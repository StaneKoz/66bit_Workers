import React, { useContext, useEffect, useState } from 'react';
import style from './GradinetLoader.module.scss';
import { WorkersContext } from '../../pages/workers_page/page/WorkersPage';

const GradientLoader = () => {
  const elements = Array.from({ length: 10 });
  const { fetcherState, currentPage } = useContext(WorkersContext) ?? { fetcherState: 'idle', currentPage: 1 }
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (fetcherState == 'submitting' && currentPage == 1) {
      setIsActive(true)
    } else {
      setIsActive(false);
    }
  }, [fetcherState, currentPage])
  return (
    <div className={[style.list, isActive ? style.active : ''].join(' ')}>
      {
        elements.map((elem, index) => <div className={style.item} key={-index}></div>)
      }
    </div>
  );
};

export default GradientLoader;