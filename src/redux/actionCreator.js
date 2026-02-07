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

export const fetchOrders = () => (dispatch) => {
  axios
    .get("https://sakura-restaurent-default-rtdb.firebaseio.com/orders.json")
    .then((response) => {
      const data = response.data;

      const ordersArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];

      dispatch(loadOrders(ordersArray));
    })
    .catch((error) => {
      console.log("fetchOrders error:", error.response?.status, error.message);
      dispatch(orderLoadFailed());
    });
};