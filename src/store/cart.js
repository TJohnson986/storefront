const initialState = [];

// 2 things that the reducer needs to run: state & action
function cartReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      // check if payload is already in the cart, use the new one
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      default:
        return state;
  }
}

// actions, by convention, are defined in their own file, or next to the reducer, but can be defined anywhere
export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export default cartReducer;