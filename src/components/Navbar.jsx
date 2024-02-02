import React, { useState } from 'react'
import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import logo_white_1x from "../assets/images/logo/logo_white_1x.png";

const Navbar = ({handleSidebar}) => {
    const [toggleMenu,setToggleMenu] = useState("menu_anim main_menu_inner navbar-collapse menu_active");

    const handleToggleMenu = ()=>{
        if(toggleMenu==="menu_anim main_menu_inner navbar-collapse menu_active")
        {
            setToggleMenu("menu_anim main_menu_inner navbar-collapse")
        }
        else
        {
            setToggleMenu("menu_anim main_menu_inner navbar-collapse menu_active")
        }
    }
  return (
    <div>
        <header className="header_section style_2" style={{position:"fixed", zIndex:"9999"}}>
        <div className="content_wrap">
          <div className="container maxw_1560">
            <div className="row align-items-center">

              <div className="col-lg-2 col-md-6 col-6">
                <div className="brand_logo">
                  <a className="brand_link" href="#">
                    <img src={logo_white_1x} srcset={logo_white_1x} alt="logo_not_found"/>
                  </a>
                </div>
              </div>

              <div className="col-lg-10 col-md-6 col-6">
                <nav className="main_menu navbar navbar-expand-lg">
                  <button className="mobile_menu_btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggleMenu}>
                    <span className="navbar-toggler-icon"><i className="fal fa-bars"></i></span>
                  </button>
                  <div className={toggleMenu} id="main_menu_dropdown">
                    <ul className="main_menu_list ul_li">
                      <li>
                        <a className="nav-link" href="#">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">Coffee</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Tea
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Iced
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Blended
                        </a>
                        
                      </li>
                      <li>
                        <a className="nav-link" href="#">Energy</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">Boba</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">Food</a>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="experience_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact us</a>
                        <ul className="submenu dropdown-menu" aria-labelledby="experience_submenu">
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Loyalty</a></li>
                          <li><a href="#">Refer Friends</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <ul className="header_btns_group ul_li_right">
                    <li>
                      <button type="button" className="main_search_btn" data-bs-toggle="collapse" data-bs-target="#main_search_collapse" aria-expanded="false" aria-controls="main_search_collapse">
                        <i className="fal fa-search"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="cart_btn" onClick={()=>handleSidebar()}>
                        <i className="fal fa-shopping-bag"></i>
                        <small className="cart_counter">2</small>
                      </button>
                    </li>
                    <li>
                      <a className="btn btn_primary text-uppercase" href="#">Login</a>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>

        <div className="main_search_collapse collapse" id="main_search_collapse">
          <div className="main_search_form card">
            <div className="container maxw_1560">
              <form action="#">
                <div className="form_item">
                  <input type="search" name="search" placeholder="Search here..."/>
                  <button type="submit" className="submit_btn"><i className="fal fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar