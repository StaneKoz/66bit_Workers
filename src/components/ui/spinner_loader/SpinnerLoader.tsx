import React, { useContext, useEffect, useRef } from 'react';
import { WorkersContext } from '../../pages/workers_page/page/WorkersPage';
import style from './SpinnerLoader.module.scss';

const SpinnerLoader = () => {
  const context = useContext(WorkersContext);
  let{ fetcherState, submitBtnRef, fetcherData, currentPage } = useContext(WorkersContext) ?? { fetcherState: 'idle', submitBtnRef: null, fetcherData: [] }
  const spinnerContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('scroll',  scrollHandler);
  }, []);

  useEffect(() => {
    if ((fetcherState === 'idle') && spinnerContainerRef.current != null) {
      spinnerContainerRef.current.classList.remove(style.active)
    }
    document.addEventListener('scroll',  scrollHandler);
  }, [fetcherState, fetcherData]);

  function scrollHandler(e: any) {
    if (submitBtnRef?.current == null || spinnerContainerRef.current == null || currentPage == undefined) {
      return;
    }
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150
      && fetcherState === 'idle' && fetcherData?.length != 0 && fetcherData != undefined
    ) {
      spinnerContainerRef.current.classList.add(style.active);
      fetcherState = 'submitting';
      submitBtnRef.current.click();
    }
  }
  return (
    <div className={style.container} ref={spinnerContainerRef}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default SpinnerLoader;