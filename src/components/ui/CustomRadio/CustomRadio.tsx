import React, { FC, PropsWithChildren, useRef } from 'react';
import style from './CustomRadio.module.scss';

interface ICustomRadioProps {
  className: string
  name: string,
  value: string,
  ruValue?: string
}

const CustomRadio:FC<PropsWithChildren<ICustomRadioProps>> = ({ children, className, name, value, ruValue }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function clickHandler(ev: React.MouseEvent<HTMLInputElement>) {
    if (inputRef.current != null && !inputRef.current.closest('label')) {
      inputRef.current.click();
    }
  }

  return (
    <div className={style.container}>
      <input type='radio' name={name} className={style.input} value={value} ref={inputRef} form={'123'} data-ru-value={ruValue ?? ''}/>
      <div className={[className, style.customRadio].join(' ')} onClick={clickHandler}>
        <img className={style.tick} src={require('../../../static/icons/tick.svg').default}/>
      </div>    
    </div>

  );
};

export default CustomRadio;