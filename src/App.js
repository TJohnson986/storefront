import './App.css';
import Header from './components/Header.js'
import Categories from './components/Categories.js'
import Products from './components/Products.js'
import Footer from './components/Footer.js'

import { Provider } from 'react-redux';
import store from './store/index.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React is Alive</h1>
        <Header />
        <Categories />
        <Products />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
