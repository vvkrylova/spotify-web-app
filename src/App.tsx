import React from 'react';
import {ReactComponent as Logo} from './assets/logo.svg';

function App() {
  return (<React.Fragment>
      <div className='main'>
        <nav className='main__nav'>
            <div className='nav_logo'>
                <a><Logo /></a>
            </div>
        </nav>
        <div className='content'>
        </div>   
      </div>
      <div className='now_playing_bar' ></div>
  </React.Fragment>
  );
}

export default App;
