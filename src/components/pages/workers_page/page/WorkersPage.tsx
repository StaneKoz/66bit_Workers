import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { NestingContext } from '../../../root/Root';
import { observer } from 'mobx-react-lite';
import style from './WorkersPage.module.scss';
import FilterOptionsList from '../filterOptionsList/FilterOptionsList';
import WorkersList from '../workers_list/WorkersList';
import { useFetcher } from 'react-router-dom';
import { IWorkerItem } from '../types/IWorkerItem';
import SelectedOptions from '../selectedOptionsList/SelectedOptions';
import { filterOptions } from '../../../../const/filterOptions';
import SearchInput from '../search/SearchInput';

const countRecords = 20;

export type WorkersContextValue = {
  submitBtnRef: React.RefObject<HTMLButtonElement>,
  fetcherState: 'submitting' | 'loading' | 'idle',
  fetcherData: IWorkerItem[] | undefined;
  formRef: React.RefObject<HTMLFormElement>
  currentPage: number,
  setCurrentPage: (value: number) => void
}

export const WorkersContext = createContext<WorkersContextValue | null>(null);

const WorkersPage = observer(() => {
  const { nestingPath } = useContext(NestingContext);
  const nestingLevel = nestingPath.length();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const fethcer = useFetcher<IWorkerItem[]>();
  const formRef = useRef<HTMLFormElement>(document.forms[123]);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const mainSubmitRef = useRef<HTMLButtonElement>(null);
  const [workers, setWorkers] = useState<IWorkerItem[]>([]);

  useEffect(() => {
    nestingPath.set(nestingLevel, "Список сотрудников");
    formRef.current.onformdata = formDataHandler;
    if (mainSubmitRef.current != null) {
      mainSubmitRef.current.click()
    }
    return () => {
      nestingPath.filter((key: number, value: string) => key < nestingLevel);
    }
  }, []);

  useEffect(() => {
    formRef.current.onformdata = formDataHandler;
  }, [currentPage])

  useEffect(() => {
    if (fethcer.data) {
      if (currentPage == 1) {
        setWorkers(fethcer.data);
      } else {
        setWorkers([...workers, ...fethcer.data])
      } 
      setCurrentPage(currentPage + 1)
    }
  }, [fethcer.data]);

  function formDataHandler(ev: FormDataEvent) {
    const stack =  Array.from(formRef.current.elements).map(elem => elem as HTMLInputElement).filter(input => input.checked).map(input => input.value);
    ev.formData.set('Stack', JSON.stringify(stack))
    ev.formData.set("Page", currentPage.toString());
    ev.formData.set("Count", countRecords.toString());
  };

  return (
    <WorkersContext.Provider value={{
      submitBtnRef,
      currentPage,
      setCurrentPage,
      formRef,
      fetcherState: fethcer.state,
      fetcherData: fethcer.data
    }}>
      <section className={style.workers}>
        <div className={style.headerMenu}>
          <div className={[style.headerMenuContainer, '_container'].join(' ')}>
            <h1 className={style.workersTitle}>
              Список сотрудников
            </h1>
            <div className={style.filterOptions}>
              <fethcer.Form method='POST' ref={formRef} id={"123"}>
                <FilterOptionsList options={filterOptions} />
                {/* <button type='submit' id="workers_submitBtn" ref={submitBtnRef}>
                  Отправить форму
                </button> */}
              </fethcer.Form>
            </div>
            <div className={style.searchInput}>
                <SearchInput/>
            </div>
          </div>
        </div>
        <div className={style.selectedOptions}>
          <div className={[style.selectedOptionsContainer, '_container'].join(' ')}>
            <SelectedOptions />
            <div className={style.submitBtn}>
              <button type='submit' form={'123'} ref={submitBtnRef} style={{display: 'none'}} onClick={(e) => {
                if (fethcer.state == 'submitting') {
                  e.preventDefault()
                }
              }}>
              </button>
              <button type='submit' form={'123'} ref={mainSubmitRef} onClick={() => {
                setCurrentPage(1);
              }}>
                Найти
              </button>
            </div>
          </div>
        </div>
        <div className={style.workersList}>
          <div className={[style.workersListContainer, '_container'].join(' ')}>
            <WorkersList workers={workers} />
          </div>
        </div>
      </section>
    </WorkersContext.Provider>
  );
});

export default WorkersPage;