import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
        <Outlet/> {/*  where ever we use <Outlet/> we can change dynamically. means other parts remain samne. */}
    <Footer/>
    </>
  )
}

export default Layout
