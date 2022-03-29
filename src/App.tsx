import React from 'react';

import {ReactComponent as Logo} from './assets/logo.svg';
// import {ReactComponent as Home} from './assets/home.svg';
import {ReactComponent as HomeActive} from './assets/homeActive.svg';
import {ReactComponent as Search } from './assets/search.svg';
// import {ReactComponent as SearchActive } from './assets/search.svg';
import {ReactComponent as Collection } from './assets/collection.svg';
// import {ReactComponent as CollectionActive } from './assets/collectionActive.svg';
import {ReactComponent as Avatar} from './assets/avatar.svg';
import {ReactComponent as TriangleDown} from './assets/triangleDown.svg';
import {ReactComponent as Back} from './assets/back.svg';
import {ReactComponent as Forward} from './assets/forward.svg';
function App() {
  return (<React.Fragment>
      <div className='main'>
        <nav className='main__nav'>
            <div className='nav_logo'>
                <a href="/"><Logo /></a>
            </div>
            <ul className='nav_btns'>
              <li className='nav_btns__btn nav_btns__btn_active'>
                  <HomeActive />
                  <span>Главная</span>
              </li>
              <li className='nav_btns__btn'>
                <Search />
                <span >Поиск</span>
              </li>
              <li className='nav_btns__btn'>
                <Collection />
                <span>Моя медиатека</span>
              </li>
            </ul>
        </nav>
        <div className='main__container'>
          <div className='top_bar'>
            <header className='top_bar__header'>
              <div className='navigation_btns'>
                <div className='navigation_btn navigation_btn_disabled'><Back /></div>
                <div className='navigation_btn'><Forward /></div>
              </div>
              <div className='profile_btn'>
                <div className='profile_btn__avatar'>
                  <Avatar />
                </div>
                <span>Пользователь</span>
                <TriangleDown />
              </div>
            </header>
          </div>
          <div className='content'></div>
        </div>   
      </div>
      <div className='now_playing_bar' ></div>
  </React.Fragment>
  );
}

export default App;
