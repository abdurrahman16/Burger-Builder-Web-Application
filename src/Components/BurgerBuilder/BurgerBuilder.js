import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';


const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 40,
  meat: 90
};

export class BurgerBuilder extends Component {
  state = {
    bgtop: [{ type: 'bread-top', amount: 1 }],
    bgbottom: [{ type: 'bread-bottom', amount: 1 }],
    ingridients: [
      { type: 'salad', amount: 0 },
      { type: 'cheese', amount: 0 },
      { type: 'meat', amount: 0 }
    ],
    totalPrice: 80,
    modalOpen:false
  };

  addIngridientHandle = (type) => {
    const ingridients = [...this.state.ingridients];
    let price = this.state.totalPrice;

    for (let item of ingridients) {
      if (item.type === type) {
        item.amount += 1;
        price += INGREDIENT_PRICES[type];
      }
    }

    this.setState({
      ingridients,
      totalPrice: price
    });
  };

  removeIngridientHandle = (type) => {
    const ingridients = [...this.state.ingridients];
    let price = this.state.totalPrice;

    for (let item of ingridients) {
      if (item.type === type) {
        if (item.amount <= 0) return;

        item.amount -= 1;
        price = Math.max(80, price - INGREDIENT_PRICES[type]);
      }
    }

    this.setState({
      ingridients,
      totalPrice: price
    });
  };

  toggleModal=()=>{
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {
    return (
      <div>
        <div>
        <Burger ingridients={this.state.ingridients} />
        <Controls
          price={this.state.totalPrice}
          ingridientAdded={this.addIngridientHandle}
          ingridientRemoved={this.removeIngridientHandle}
          toggleModal={this.toggleModal}
        />
      </div>
      <Modal isOpen={this.state.modalOpen}>
        <ModalHeader>Your Order Summary</ModalHeader>
        <ModalBody>
          <p>Total Price: {this.state.totalPrice.toFixed(0)} BDT</p>
          </ModalBody>
          <ModalFooter>
          <Button color="success" onClick={this.toggleModal}> Continue to Checkout</Button>
          <Button color="secondary" onClick={this.toggleModal}> Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;
