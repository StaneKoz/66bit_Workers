import React, { FC, PropsWithChildren, useRef } from 'react';
import style from './CustomRadio.module.scss';

interface ICustomRadioProps {
  className: string
  name: string,
  value: string,
  ruValue?: string
  type: 'radio' | 'checkbox';
}

const CustomRadio:FC<ICustomRadioProps> = ({ className, name, value, ruValue, type }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function clickHandler(ev: React.MouseEvent<HTMLInputElement>) {
    if (inputRef.current != null && !inputRef.current.closest('label')) {
      inputRef.current.click();
    }
  }

  return (
    <div className={style.container}>
      <input type={type} name={name} className={style.input} value={value} ref={inputRef} form={'123'} data-ru-value={ruValue ?? ''}/>
      <div className={[className, style.customRadio].join(' ')} onClick={clickHandler}>
        <img className={style.tick} src={require('../../../static/icons/tick.svg').default}/>
      </div>    
    </div>

  );
};

export default CustomRadio;