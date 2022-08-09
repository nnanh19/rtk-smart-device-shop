import React from 'react';
import './App.css';
import Home from './features/home/Home';
import { Route, Routes } from 'react-router-dom';
import ProductsDetail from './features/products-detail/ProductsDetail';
import Cart from './features/cart/Cart';
import SiteLayout from './features/layout/SiteLayout';
import Signup from './features/users/signup/Signup';
import Signin from './features/users/signin/Signin';
import { IsAdmin } from './utils/auth';
import AdminLayout from './features/layout/AdminLayout';
import { ToastContainer } from 'react-toastify';
import List from './features/admin/products/list/List';
import Update from './features/admin/products/update/Edit';
import Add from './features/admin/products/add/Add';

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
          <Route path='/admin' element={<AdminLayout />} >
            <Route index element={ <List /> }/>
            <Route path='danh-sach' element={<List /> }/>
            <Route path='them-moi' element={<IsAdmin> <Add /> </IsAdmin>}/>
            <Route path='cap-nhat-san-pham/:id' element={<IsAdmin> <Update /> </IsAdmin>}/>
          </Route>
        </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
