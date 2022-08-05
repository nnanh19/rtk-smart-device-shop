import React from 'react';
import './App.css';
import Home from './features/home/Home';
import Header from './features/header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductsDetail from './features/products-detail/ProductsDetail';
import Footer from './features/footer/Footer';
import Cart from './features/cart/Cart';


function App() {
  return (
    <div className="mx-auto">
      <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/chi-tiet-san-pham/:id' element={<ProductsDetail />}/>
            <Route path='gio-hang' element={<Cart />}/>
          </Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
