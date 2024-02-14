import React, { FC, useEffect, useRef } from 'react';
import style from './filterOptionsItem.module.scss';
import { IFilterOption } from '../types/IFilterOption';
import radioStyle from '../../../ui/CustomRadio/CustomRadio.module.scss';
import CustomRadio from '../../../ui/CustomRadio/CustomRadio';
import { getDeviceType } from '../../../../helpers/getTypeDevice';

interface IFilterOptionsItemProps {
  item: IFilterOption
}

const FilterOptionsItem: FC<IFilterOptionsItemProps> = ({ item }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current == null) return;
    if (getDeviceType() == 'mobile') {
     textRef.current.addEventListener('click', clickHanler); 
    } else {
      textRef.current.addEventListener('mouseover', mouseOverHandleer);
      textRef.current.addEventListener('mouseout', mouseOutHandler);
    }
  }, []);

  useEffect(() => {

  })

  function mouseOverHandleer(ev: MouseEvent) {
    textRef.current?.classList.add(style.active)
    const coordinates = textRef.current?.getBoundingClientRect();
    console.log(coordinates)
  }

  function mouseOutHandler(ev: MouseEvent) {
    textRef.current?.classList.remove(style.active)
  }

  function clickHanler(ev: any) {
    if (textRef.current == null || selectRef.current == null) {
      return
    }

    if (textRef.current.classList.contains(style.active)) {
      textRef.current.classList.remove(style.active);
    } else {
      textRef.current.classList.add(style.active);
      const coordinates = selectRef.current?.getBoundingClientRect();

      if (coordinates?.left < 0) {
        selectRef.current.classList.add(style.left)
      } 
    }
  }

  return (
    <div className={style.item} ref={textRef}>
      <div className={style.text}>
        {item.option.value}
      </div>
      <div className={style.selectArrow}>
        <img src={require('../../../../static/icons/top-arrow-icon.svg').default} alt='icon' />
      </div>
      <div className={style.dropDownSelect} ref={selectRef}>
        {
          Object.entries(item.items).map(([key, value]) => (
            <div className={style.selectItem} key={key}>
              <div className={style.selectItemText}>
                {value}
              </div>
              <div className={style.radio}>
                <CustomRadio className={radioStyle.customRadioList} name={item.option.key} value={key} ruValue={value}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FilterOptionsItem;