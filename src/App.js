import React from 'react';
import './App.css';
import Home from './features/home/Home';
import Header from './features/header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductsDetail from './features/products-detail/ProductsDetail';
import Footer from './features/footer/Footer';

function App() {
  return (
    <div className="mx-auto">
      <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/chi-tiet-san-pham/:id' element={<ProductsDetail />}/>
          </Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
