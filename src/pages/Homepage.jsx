import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'
import Feature from '../components/Feature'
import Shop from '../components/Shop'
import Menu from '../components/Menu'
import Service from '../components/Service'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
    const [cartActive,setCartActive] = useState(["cart_sidebar","cart_sidebar_overlay"]);
    
    const handleSidebar = ()=>{
        if(cartActive[0]==="cart_sidebar active")
        {
             setCartActive(["cart_sidebar","cart_sidebar_overlay"]);
        }
        else
        {
             setCartActive(["cart_sidebar active","cart_sidebar_overlay active"]);
        }
    }
  return (
    <div>
        <Navbar handleSidebar={handleSidebar}/>
        <main>
        <Sidebar handleSidebar={handleSidebar} cartActive={cartActive}/>
        <Banner/>
        <About/>
        <Feature/>
        <Shop/>
        <Menu/>
        <Service/>
        <Blog/>
        </main>
        <Footer/>
    </div>
  )
}

export default Homepage