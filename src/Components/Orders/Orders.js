import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../../redux/actionCreator'


const mapStateToProps = state => {
  return {
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderError: state.orderError
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  }
}


 class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    return (
      <div>Orders</div>
    )
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(Orders);