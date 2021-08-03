import './App.css';
import Header from './components/Header.js'
import Categories from './components/Categories.js'
import Products from './components/Products.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <h1>React is Alive</h1>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
