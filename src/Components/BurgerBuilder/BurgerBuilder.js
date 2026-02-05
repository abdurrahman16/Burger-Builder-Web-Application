import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Summary from './Summary/Summary';
import { Navigate } from 'react-router-dom';
import { addIngridient, removeIngridient, updatePurchasable } from '../../redux/actionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    ingridients: state.ingridients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (igType) => dispatch(addIngridient(igType)),
    removeIngridient: (igType) => dispatch(removeIngridient(igType)),
    updatePurchasable: () => dispatch(updatePurchasable()),
  };
};

class BurgerBuilder extends Component {
  state = {
    modalOpen: false,
    checkout: false,
  };

  addIngridientHandle = (type) => {
    this.props.addIngredient(type);
    // this.props.updatePurchasable();
  };

  removeIngridientHandle = (type) => {
    this.props.removeIngridient(type);
    // this.props.updatePurchasable();
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleCheckout = () => {
    this.setState({ checkout: true });
  };

  render() {
    if (this.state.checkout) {
      return <Navigate to="/checkout" />;
    }

    return (
      <div>
        <div>
          <Burger ingridients={this.props.ingridients} />
          <Controls
            price={this.props.totalPrice}
            ingridientAdded={this.addIngridientHandle}
            ingridientRemoved={this.removeIngridientHandle}
            toggleModal={this.toggleModal}
          />
        </div>

        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Your Order Summary</ModalHeader>
          <ModalBody>
            <Summary ingridients={this.props.ingridients} />
            <p>Total Price: {this.props.totalPrice.toFixed(0)} BDT</p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleCheckout}>
              Continue to Checkout
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
