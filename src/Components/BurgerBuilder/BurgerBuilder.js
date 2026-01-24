import React, { Component } from 'react'
import Burger from './Burger/Burger.js'
import Controls from './Controls/Controls.js'

export class BurgerBuilder extends Component {
  state ={
   bgtop: [
      { type: 'bread-top', amount: 1 },
    ],
    bgbottom: [
      { type: 'bread-bottom', amount: 1 },
   ],
    ingridients: [
      
      { type: 'salad', amount: 0 },
      { type: 'cheese', amount: 0 },
      { type: 'meat', amount: 0},
      
    ]
  }
  render() {
    return (
      <div>
        <Burger  ingridients={this.state.ingridients}/>
        <Controls/>
      </div>
    )
  }
}

export default BurgerBuilder