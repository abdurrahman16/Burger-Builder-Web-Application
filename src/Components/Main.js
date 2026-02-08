import React from 'react'
import Header from './Header/Header.js';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder.js';
import { Routes, Route } from 'react-router-dom';
import Orders from './Orders/Orders.js';
import Checkout from './Orders/Checkout/Checkout.js';
import Auth from './Auth/Auth.js';
const Main = props => {
  return (
    <div>
        <Header/>
       <div className='container'>
          <Routes>
            <Route path='/login' element = {<Auth/>}/>
            <Route path='/' element = {<BurgerBuilder/>}/>
            <Route path='/orders' element = {<Orders/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>
            

            
          </Routes>
        </div>   
    </div>
  );
}

export default Main;