import { Button } from 'reactstrap'
import React, { Component } from 'react'
import "./Checkout.css"

 class Checkout extends Component {
  state = {
    values:{
      deliveryAddress: '',
      contactNumber: '',
      paymentMethod: 'Cash On Delivery'
    }  
  
  
  
  }

goBack = () => {
  window.history.back();
};

submitHandler = (e) => {
  console.log(this.state.values);
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
    return (
      <div>
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
    <button type="button" className="btn btn-primary" onClick={this.submitHandler}>
      Place Order
    </button>

    <button type="button" className="btn btn-danger" onClick={this.goBack}>
      Cancel Order
    </button>
  </div>
</form>





      </div>
    )
  }
 }
export default Checkout;