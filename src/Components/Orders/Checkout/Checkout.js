import { Button, Modal, ModalBody } from 'reactstrap'
import React, { Component } from 'react'
import "./Checkout.css"
import { connect } from 'react-redux'
import axios from 'axios'
import Spinner from '../../Spinner/Spinner'
import { resetsetIngridients } from '../../../redux/actionCreator'  

const mapStateToProps = (state) => {
  return {
    ingridients: state.ingridients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    resetIngridients: () => dispatch ( resetsetIngridients() )
  }
}

 class Checkout extends Component {
  state = {
    values:{
      deliveryAddress: '',
      contactNumber: '',
      paymentMethod: 'Cash On Delivery'
      
    }  ,
    isLoading: false,
    isModalOpen: false,
    modalMessage: ''
  
  
  
  }


closeModal = () => {
  this.setState({
    isModalOpen: false
  });
};

goBack = () => {
  window.history.back();
};

submitHandler = (e) => {
  this.setState ( { isLoading: true } )


const order = {
  ingridients: this.props.ingridients,
  customer: this.state.values,
  price: this.props.totalPrice,
  orderData: this.state.values,
  orderTime: new Date().toISOString()
}
axios.post('https://sakura-restaurent-default-rtdb.firebaseio.com/orders.json', order)
.then ( response => {
  if (response.status === 200) {
    this.setState ( {
       isLoading: false ,
       isModalOpen: true,
       modalMessage: 'Your order has been placed successfully!'
      } )
      this.props.resetIngridients();
    
  }
  else {
    this.setState ( { 
      isLoading: false,
      isModalOpen: true,
       modalMessage: 'Something went wrong. Please try again later.'
    
    
    } )
  }
})
  .catch ( error => {
    this.setState ( { 
      isLoading: false,
      isModalOpen: true,
       modalMessage: error.message
    } )
  })



  
}





















inputChangeHandler = (e) => {
  this.setState ( {
    values: {
      ...this.state.values,
      [e.target.name]: e.target.value
    }

  })
} 

  render() {
    let form = (<div>
          <h4 style={{ fontWeight: 800, margin: "10px 0" }}>
          Payment:
          <span style={{ marginLeft: "8px", color: "#16a34a" }}>
            ¥{this.props.totalPrice}
          </span>
        </h4>
                    <form className="checkout-card">
          <h3 className="checkout-title">Delivery Details</h3>
          <p className="checkout-subtitle">Please confirm your address and contact info.</p>

          <div className="field">
            <label className="label">Delivery Address</label>
            <textarea
              placeholder="e.g., 1-2-3, Street, City, Prefecture"
              onChange={this.inputChangeHandler}
              name="deliveryAddress"
              value={this.state.values.deliveryAddress}
              className="input textarea"
              rows={4}
            />
          </div>

          <div className="field">
            <label className="label">Contact Number</label>
            <input
              placeholder="e.g., 080-1234-5678"
              onChange={this.inputChangeHandler}
              type="text"
              name="contactNumber"
              value={this.state.values.contactNumber}
              className="input"
            />
          </div>

          <div className="field">
            <label className="label">Payment Method</label>
            <select
              name="paymentMethod"
              value={this.state.values.paymentMethod}
              onChange={this.inputChangeHandler}
              className="input"
            >
              <option value="Cash On Delivery">Cash On Delivery</option>
              <option value="Online Payment">Online Payment</option>
            </select>
          </div>

          <div className="actions">
            <button type="button" className="btn btn-primary" onClick={this.submitHandler} 
            disabled={this.props.totalPrice <= 80}>
              Place Order
            </button>

            <button type="button" className="btn btn-danger" onClick={this.goBack}>
              Cancel Order
            </button>
          </div>
        </form>

    </div>)



    return (
              <div>
                 { this.state.isLoading ? <Spinner /> : form }
               <Modal isOpen={this.state.isModalOpen} toggle={this.closeModal}>
  <ModalBody>
    <p>{this.state.modalMessage}</p>

    <div style={{ textAlign: "right", marginTop: "15px" }}>
      <button
        type="button"
        onClick={this.closeModal}
        style={{
          padding: "6px 14px",
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Close
      </button>
    </div>

  </ModalBody>
</Modal>
               </div>
    )
  }
 }
export default connect(mapStateToProps, mapDispatchToProps) (Checkout);