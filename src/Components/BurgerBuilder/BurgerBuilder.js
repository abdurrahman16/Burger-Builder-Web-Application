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
addIngridientHandle = (type) => {
  const ingridients = [...this.state.ingridients];

  for (let item of ingridients) {
    if (item.type === type) {
      item.amount += 1;
    }
  }

  this.setState({ ingridients });
};

removeIngridientHandle = (type) => {
  const ingridients = [...this.state.ingridients];

  for (let item of ingridients) {
    if (item.type === type && item.amount > 0) {
      item.amount -= 1;
    }
  }

  this.setState({ ingridients });
};
 
  render() {
    return (
      <div>
        <Burger  ingridients={this.state.ingridients}/>
        <Controls
        ingridientAdded={this.addIngridientHandle}
        ingridientRemoved={this.removeIngridientHandle}
        />
      </div>
    )
  }
}

export default BurgerBuilder