import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actionCreator';
import Order from '../Orders/Order/Order';

const mapStateToProps = (state) => ({
  orders: state.orders,
  orderLoading: state.orderLoading,
  orderError: state.orderError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
});

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const orders = Array.isArray(this.props.orders)
      ? this.props.orders.map((order) => (
          <Order order={order} key={order.id || order._id} />
        ))
      : [];

    if (this.props.orderLoading) return <p>Loading...</p>;
    if (this.props.orderError) return <p>{this.props.orderError}</p>;

    return <div>{orders}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
