const initialState = [];

function cartReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      default:
        return state;
  }
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export default cartReducer;