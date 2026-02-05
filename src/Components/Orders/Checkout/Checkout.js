import { Button } from 'reactstrap'
import React, { Component } from 'react'

 class Checkout extends Component {
  state = {
    values:{
      deliveryAddress: '',
      contactNumber: '',
      paymentMethod: 'Cash On Delivery'
    }  
  
  
  
  }

goBack = () => {
  this.props.history.goBack("/");
}

inputChangeHandler = (e) => {
  this.setState ( {
    values: {
      ...this.state.values,
      [e.target.name]: e.target.value
    }

  })
   

  render() {
    return (
      <div>
                    <form>
              <textarea
              placeholder='Your Delivery Address'
                name='deliveryAddress '
                value={this.state.values.deliveryAddress}
                className='form-control'
              >
              </textarea>
              <br></br>

              <input
              placeholder='Your Contact Number'
                type='text'
                name='contactNumber'
                value={this.state.values.contactNumber}
                className='form-control'
              />
              <br></br>
              <select
                name='paymentMethod'
                value={this.state.values.paymentMethod}
                className='form-control'
              >
                <option>Cash On Delivery</option>
                <option>Online Payment</option>
              </select> <br></br>
              <Button style={{backgroundColor: 'Green'}} onClick={this.goBack}>
                 Place Order
                </Button> 
                
                <Button style={{backgroundColor: 'Red', marginLeft: '10px'}} onClick={this.goBack}>
                 Cancel Order
                </Button>
            </form>




      </div>
    )
  }
}
export default Checkout