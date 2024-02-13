import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { NestingContext } from '../Root';
import style from './NestingPath.module.scss';

const NestingPathComponent = observer(() => {
  const { nestingPath }= useContext(NestingContext);

  return (
    <div className={style.nestingPath}>
      <div className={[style.nestingPathContainer, '_container'].join(' ')}>
        {
          Array.from(nestingPath.path.entries()).map(([key, value]) => <div className={style.nestingPathItem} key={key}>{value}</div>)
        }        
      </div>
    </div>
  );
});

export default NestingPathComponent;