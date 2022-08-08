import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './site/footer/Footer'
import Header from './site/header/Header'

const SiteLayout = () => {
  return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>
  )
}

export default SiteLayout