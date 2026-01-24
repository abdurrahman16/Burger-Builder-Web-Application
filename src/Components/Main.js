import React from 'react'
import Header from './Header/Header.js';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder.js';

const Main = props => {
  return (
    <div>
        <Header/>
        <BurgerBuilder/>    
    </div>
  );
}

export default Main;