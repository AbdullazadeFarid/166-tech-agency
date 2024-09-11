import React from 'react'
import Footer from '../../shared/footer/footer'
import { Outlet } from 'react-router';
import Header from '../../shared/header/header';


const Primarylayout = () => {
  return (
    <>

    <Header/>

    <main>

        <Outlet/>

    </main>


    <Footer/>


    </>
  )
}

export default Primarylayout