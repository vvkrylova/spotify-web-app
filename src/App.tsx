import React from 'react';

import {ReactComponent as Logo} from './assets/logo.svg';
// import {ReactComponent as Home} from './assets/home.svg';
import {ReactComponent as HomeActive} from './assets/homeActive.svg';
import {ReactComponent as Search } from './assets/search.svg';
// import {ReactComponent as SearchActive } from './assets/search.svg';
import {ReactComponent as Collection } from './assets/collection.svg';
// import {ReactComponent as CollectionActive } from './assets/collectionActive.svg';
import {ReactComponent as Avatar} from './assets/avatar.svg';
function App() {
  return (<React.Fragment>
      <div className='main'>
        <nav className='main__nav'>
            <div className='nav_logo'>
                <a href="/"><Logo /></a>
            </div>
            <ul className='nav_buttons'>
              <li className='nav_buttons__btn nav_buttons__btn_active'>
                  <HomeActive />
                  <span>Главная</span>
              </li>
              <li className='nav_buttons__btn'>
                <Search />
                <span >Поиск</span>
              </li>
              <li className='nav_buttons__btn'>
                <Collection />
                <span>Моя медиатека</span>
              </li>
            </ul>
        </nav>
        <div className='main__container'>
          <div className='top_bar'>
            <header className='top_bar__header'>
              <div className='profile_btn'>
                <div className='profile_btn__avatar'>
                  <Avatar />
                </div>
                <span>Пользователь</span>
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
