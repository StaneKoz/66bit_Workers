import React, { useContext } from 'react';
import style from './SwitchTheme.module.scss';
import { ThemeContext } from '../../../app/App';
import { Theme } from '../../../types/Themes';

const SwitchTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext) ?? { theme: Theme.light, setTheme: null};
  
  function clickHandler(ev: any) {
    if (ev.target.classList.contains(style.circle) || setTheme == null) {
      return;
    }

    setTheme(Theme.light == theme ? Theme.dark : Theme.light);
  }

  return (
    <div className={style.container} onClick={clickHandler}>
      <div className={[style.circle, style[theme]].join(' ')}>
        <img src={require(`../../../static/icons/${theme == Theme.light ? 'moon.svg' : 'sun.svg'}`)}/>
      </div>
    </div>
  );
};

export default SwitchTheme;