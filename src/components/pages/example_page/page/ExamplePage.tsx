import React, { useContext, useEffect, useState } from 'react';
import { NestingContext } from '../../../root/Root';
import { observer } from 'mobx-react-lite';
import style from './ExamplePage.module.scss';

const ExamplePage = observer(() => {
  const { nestingPath } = useContext(NestingContext);
  const nestingLevel = nestingPath.length();

  useEffect(() => {
    nestingPath.set(nestingLevel, "example")

    return () => { 
      nestingPath.filter((key: number, value: string) => key < nestingLevel);
    }
  }, [])

  return (
    <section className={style.workers}>
      <div className={[style.workersContainer, '_container'].join(' ')}>
        <div className={style.headerMenu}>
          <h1 className={style.workersTitle}>
            Список сотрудников
          </h1>
          <div className={style.filterOptions}>
            
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExamplePage;