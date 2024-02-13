import React, { createContext, useEffect, useState } from 'react';
import './Root.scss';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import '../../static/styles/Themes.css';
import NestingPathComponent from './nesting_path/NestingPathComponent';
import { NestingPath } from './nesting_path/nestingPath';
import { observer } from 'mobx-react-lite';

export type NestingContextValue = {
  nestingPath: NestingPath
};

const nestingPath = new NestingPath();

export const NestingContext = createContext<NestingContextValue>({
  nestingPath: nestingPath
});

const Root = observer(() => {

  return (
    <NestingContext.Provider value={{
      nestingPath
    }}>
      <div className='page'>
        <Header/>
        <NestingPathComponent/>
        <main className='main'>
          <Outlet/>
        </main>
      </div>      
    </NestingContext.Provider>
  );
});

export default Root;