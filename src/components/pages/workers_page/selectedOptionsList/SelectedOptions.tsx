import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import style from './SelectedOptions.module.scss';
import { WorkersContext } from '../page/WorkersPage';

const SelectedOptions = () => {
  const { formRef, setCurrentPage } = (useContext(WorkersContext) ?? { formRef: null, setCurrentPage: null });
  const [selectedOptions, setSelectedOptions] = useState<HTMLInputElement[]>([])

  useEffect(() => {
    if (formRef != undefined && formRef.current != null) {
      formRef.current.addEventListener<'change'>('change', changeHandler)
    }
  }, []);

  function changeHandler(ev: Event) {
    if (ev.currentTarget == null) return;
    const trueEvent = ev as any as React.FormEvent<HTMLFormElement>;
    const actualState = Array.from(trueEvent.currentTarget.elements).map(elem => elem as HTMLInputElement)
      .filter(input => input.checked);
    setSelectedOptions(actualState)
  }

  function removeHandler(ev: React.MouseEvent<HTMLButtonElement>) {
    const elementForRemove = selectedOptions.filter(input => ev.currentTarget.dataset.inputValue == input.value)[0];
    elementForRemove.checked = false;
    setSelectedOptions(selectedOptions.filter(element => element != elementForRemove));
  }

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>
        Выбранные фильтры:
      </h3>
      <ul className={style.list}>
        {
          selectedOptions.length != 0 ? (
            selectedOptions.map(input => (
              <li className={style.item} key={input.value}>
                <button className={style.removeBtn} type={'button'} data-input-value={input.value} onClick={removeHandler}>
                  <div className={style.first}></div>
                  <div className={style.second}></div>
                </button>
                <div className={style.text}>
                  {input.dataset.ruValue}
                </div>
              </li>
            )))
            : (
              <div className={style.emptyList}>
                Не выбрано ни одного фильтра
              </div>
            )
        }
      </ul>
    </div>
  );
};

export default SelectedOptions;