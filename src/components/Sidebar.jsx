import React, { useState } from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import item_01 from "../assets/images/shop/11062b_2974cb752e974ea192d619ea0d64120d~mv2.webp";

const Sidebar = ({handleSidebar,cartActive}) => {

  return (
    <div className="sidebar-menu-wrapper">
          <div className={cartActive[0]}>
            <button type="button" className="close_btn" onClick={()=>handleSidebar()}><i className="fal fa-times"></i></button>
            <h2 className="heading_title text-uppercase">Cart Items - <span>4</span></h2>

            <div className="cart_items_list">
              <div className="cart_item">
                <div className="item_image">
                  <img src={item_01} alt="image_not_found"/>
                </div>
                <div className="item_content">
                  <h4 className="item_title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <span className="item_price">$19.00</span>
                  <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
                </div>
              </div>

              <div className="cart_item">
                <div className="item_image">
                  <img src={item_01} alt="image_not_found"/>
                </div>
                <div className="item_content">
                  <h4 className="item_title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <span className="item_price">$19.00</span>
                  <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
                </div>
              </div>

              <div className="cart_item">
                <div className="item_image">
                  <img src={item_01} alt="image_not_found"/>
                </div>
                <div className="item_content">
                  <h4 className="item_title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <span className="item_price">$19.00</span>
                  <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
                </div>
              </div>

              <div className="cart_item">
                <div className="item_image">
                  <img src={item_01} alt="image_not_found"/>
                </div>
                <div className="item_content">
                  <h4 className="item_title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <span className="item_price">$19.00</span>
                  <button type="button" className="remove_btn"><i className="fal fa-times"></i></button>
                </div>
              </div>
            </div>
            <div className="total_price text-uppercase">
              <span>Sub Total:</span>
              <span>$76.00</span>
            </div>
            <ul className="btns_group ul_li">
              <li><a href="#" className="btn btn_primary text-uppercase">View Cart</a></li>
              <li><a href="#" className="btn btn_border border_black text-uppercase">Checkout</a></li>
            </ul>
          </div>
          <div className={cartActive[1]}></div>
        </div>
  )
}

export default Sidebar