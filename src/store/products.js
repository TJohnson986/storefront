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

// Reducer receives actions and updates state:
export default function productsReducer(state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE':
      return { ...state, activeCategory: action.payload }
    default:
      return state;
  }
}
