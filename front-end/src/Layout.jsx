import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'

const Layout = () => {
  return (
    <>
    <AuthProvider>
    <Header />
    <Outlet />
    <Footer />
    </AuthProvider>
    </>
)
}

export default Layout