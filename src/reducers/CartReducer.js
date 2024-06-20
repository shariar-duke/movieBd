// reducer k initialize korar somoy ekta initial value dia initialze kore dite hoy
const initialState = {
  cartData: [],
};

// ekhane amra reducer function ta lekhbo
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };
      break;

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export { initialState, cartReducer };
