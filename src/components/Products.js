import { useSelector, useDispatch } from "react-redux";

import { addToCart } from '../store/cart.js';

function ProductList() {
  const products = useSelector(state => state.store.products);
  const dispatch = useDispatch();

  const itemClick = (name) => {
    dispatch(addToCart(name));
  }

  console.log('in products', products);
  return (
    <ul>
      {products.map(item => {
        return <li onClick={() => itemClick(item)}>{item.name}</li>
      })}
    </ul>
  )
}

export default ProductList;
