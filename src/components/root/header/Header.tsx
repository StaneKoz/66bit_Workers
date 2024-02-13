import React from 'react';
import style from './Header.module.scss';
import SwitchTheme from '../switch_theme/SwitchTheme';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={[style.headerContainer, '_container'].join(' ')}>
        <div className={style.logo}>
          <Link to={"/"}>
            <img src={require('../../../static/icons/site-logo.svg').default} />
          </Link>    
        </div>
        <div className={style.contacts}>
          <div className={style.contactsItem}>
            <a href='tel: +73432908476'>
              +7 343 290 84 76
            </a>
          </div>
          <div className={style.contactsItem}>
            <a href='mailto: info@66bit.ru'>
              info@66bit.ru
            </a>
          </div>
        </div>
        <div className={style.switchTheme}>
          <SwitchTheme/>
        </div>
      </div>
    </header>
  );
};

export default Header;