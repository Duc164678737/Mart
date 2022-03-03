
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import ProductDatail from './components/ProductDatail';
import { Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDatail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
