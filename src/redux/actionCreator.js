import * as actionType from './actionType';
import axios from 'axios';


export const addIngridient = (igType) => {
  return {
    type: actionType.ADD_INGRIDIENT,
    payload: igType
  };
};

export const removeIngridient = (igType) => {
  return {
    type: actionType.REMOVE_INGRIDIENT,
    payload: igType
  };
};

export const updatePurchasable = () => {
  return {
    type: actionType.UPDATE_PURCHASABLE
  };
};

export const resetsetIngridients = () => {
  return {
    type: actionType.RESETSET_INGRIDIENTS
  };
};

export const loadOrders = (orders) => {
  return {
    type: actionType.LOAD_ORDERS,
    payload: orders
  };
};

export const orderLoadFailed = () => {
  return {
    type: actionType.ORDER_LOAD_FAILED
  };
};

export const fetchOrders = () =>  dispatch => {
axios.get('https://burger-builder-8d3f7-default-rtdb.firebaseio.com/orders.json')
.then(response => {
  dispatch(loadOrders(response.data)); }

)};
