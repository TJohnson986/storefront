// initial state object
const initialState = {
  categories: [
    { displayName: 'Electronics', normalizedName: 'electronics', description: 'test'},
    { displayName: 'Housewares', normalizedName: 'housewares', description: 'test'},
    { displayName: 'Outdoor', normalizedName: 'outdoor', description: 'test'},
  ],
  products: [
    { category: 'electronics', price: 100, description: 'test', name: 'MBP', inventoryCount: 10 },
    { category: 'housewares', price: 1000, description: 'test', name: 'couch', inventoryCount: 3 },
    { category: 'outdoor', price: 10, description: 'test', name: 'chair', inventoryCount: 10 },
  ],
  activeCategory: '',
}

export function categoriesReducer(state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE_CATEGORY':
      return {...state, activeCategory: action.payload};
      default:
        return state;
  }
}

export function activateCategory(categoryName) {
  return {
    type: 'ACTIVATE_CATEGORY',
    payload: categoryName,
  }
}

// Reducer receives actions and updates state:
export default function productsReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      return state.map(product => {
        if (product.name === action.payload.name) {
          product.inventoryCount = product.inventoryCount - 1;
        }
        return product;
      });
      case 'REMOVE_FROM_CART':
    default:
      return state;
  }
}
