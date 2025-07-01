import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage, NavBar, ProductPage, SearchResults, Checkout } from "./Components";
import { useState } from 'react';

const App = () => {

  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);  
  };

  const handleRemoveFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);                   
  };

  return (
    <BrowserRouter>
      <NavBar cartItems={cartItems}
        removeFromCart={handleRemoveFromCart}/>
      <Routes>
        <Route exact path="/" element={<HomePage addToCart={addToCart} />} />
        <Route  path="/product/:id" element={<ProductPage/>} />
        <Route  path="/search" element={<SearchResults/>} />
        <Route  path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;