import React from 'react';
import './App.css';
import Home from './features/home/Home';
import { Route, Routes } from 'react-router-dom';
import ProductsDetail from './features/products-detail/ProductsDetail';
import Cart from './features/cart/Cart';
import SiteLayout from './features/layout/SiteLayout';
import Signup from './features/users/signup/Signup';
import Signin from './features/users/signin/Signin';


function App() {
  return (
    <div className="mx-auto">
        <Routes>
          <Route path='/' element={<SiteLayout />}>
            <Route index element={<Home />}/>
            <Route path='/chi-tiet-san-pham/:id' element={<ProductsDetail />}/>
            <Route path='gio-hang' element={<Cart />}/>
            <Route path='dang-ky' element={<Signup />}/>
            <Route path='dang-nhap' element={<Signin />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
