import * as actionType from '../redux/actionType';

const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 40,
  meat: 90
};

const INITIAL_STATE = {
  bgtop: [{ type: 'bread-top', amount: 1 }],
  bgbottom: [{ type: 'bread-bottom', amount: 1 }],
  ingridients: [
    { type: 'salad', amount: 0 },
    { type: 'cheese', amount: 0 },
    { type: 'meat', amount: 0 }
  ],
  totalPrice: 80,
  checkout: false
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_INGRIDIENT: {
      //
      const type = action.payload;

      const ingridients = state.ingridients.map((item) =>
        item.type === type ? { ...item, amount: item.amount + 1 } : item
      );

      const totalPrice = state.totalPrice + (INGREDIENT_PRICES[type] || 0);

      return {
        ...state,
        ingridients,
        totalPrice
      };
    }
    //
    case actionType.REMOVE_INGRIDIENT: {
  const type = action.payload;

  const target = state.ingridients.find(item => item.type === type);
  if (!target || target.amount <= 0) return state;

  const ingridients = state.ingridients.map(item =>
    item.type === type
      ? { ...item, amount: item.amount - 1 }
      : item
  );

  const newPrice = Math.max(
    80,
    state.totalPrice - INGREDIENT_PRICES[type]
  );

  return {
    ...state,
    ingridients,
    totalPrice: newPrice
  };
}


    default:
      return state;
  }
};
