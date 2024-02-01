import React from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import item_01 from "../assets/images/shop/11062b_2974cb752e974ea192d619ea0d64120d~mv2.webp";
import item_02 from "../assets/images/shop/11062b_54b0313b65a44b479c9f065e126f7c06~mv2.webp";
import item_03 from "../assets/images/shop/11062b_ca88a6f079324d7c98963f33c1f2d48f~mv2.webp";

const Shop = () => {
  return (
    <section className="shop_section sec_ptb_120">
          <div className="container">
            <div className="section_title text-uppercase">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8">
                  <h2 className="small_title wow fadeInUp" data-wow-delay=".1s"><i className="fas fa-coffee"></i> Our Products</h2>
                  <h3 className="big_title wow fadeInUp" data-wow-delay=".2s">
                    Get Picking
                  </h3>
                </div>

                <div className="col-lg-6 col-md-4">
                  <div className="abtn_wrap text-lg-end text-md-end wow fadeInUp" data-wow-delay=".3s">
                    <a className="btn btn_border border_black" href="#">See all product</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="shop_card wow fadeInUp" data-wow-delay=".1s">
                  <a className="wishlist_btn" href="#"><i className="fal fa-heart"></i></a>
                  <a className="item_image" href="#">
                    <img src={item_01} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">TRIPLE BLENDED COFFEE BEANS</a>
                    </h3>
                    <p>With our Triple Blended Coffee Beans you can finally feel like a professional barista. Bright and clean with an intense burst of flavor, these full-bodied beans strike a perfect balance between the most delicate roasts and fruitful aromas.</p>
                    <div className="btns_group">
                      <span className="item_price bg_default_brown">$101</span>
                      <a className="btn btn_border border_black text-uppercase" href="#">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a className="wishlist_btn" href="#"><i className="fal fa-heart"></i></a>
                  <a className="item_image" href="#">
                    <img src={item_02} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">LIGHTLY ROASTED COFFEE BEANS</a>
                    </h3>
                    <p>Our Lightly Roasted Coffee Beans offer the world a chance to brighten every day with a whole lot of flavor and inspiration. Try these to receive the perfect balance between bold flavor and subtle sweetness.</p>
                    <div className="btns_group">
                      <span className="item_price bg_default_brown">$101</span>
                      <a className="btn btn_border border_black text-uppercase" href="#">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="shop_card wow fadeInUp" data-wow-delay=".3s">
                  <a className="wishlist_btn" href="#"><i className="fal fa-heart"></i></a>
                  <a className="item_image" href="#">
                    <img src={item_03} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">COLUMBIAN BLENDED ESPRESSO BEANS</a>
                    </h3>
                    <p>Skillfully roasted and carefully blended, our Columbian Blended Espresso Beans don’t just wake you up in the morning, they pack a lasting punch that is sure to leave you wanting more. Silky smooth and full of layered flavors, there’s really no better way to start your day.</p>
                    <div className="btns_group">
                      <span className="item_price bg_default_brown">$101</span>
                      <a className="btn btn_border border_black text-uppercase" href="#">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="shop_card wow fadeInUp" data-wow-delay=".1s">
                  <a className="wishlist_btn" href="#"><i className="fal fa-heart"></i></a>
                  <a className="item_image" href="#">
                    <img src={item_01} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">TRIPLE BLENDED COFFEE BEANS</a>
                    </h3>
                    <p>With our Triple Blended Coffee Beans you can finally feel like a professional barista. Bright and clean with an intense burst of flavor, these full-bodied beans strike a perfect balance between the most delicate roasts and fruitful aromas.</p>
                    <div className="btns_group">
                      <span className="item_price bg_default_brown">$101</span>
                      <a className="btn btn_border border_black text-uppercase" href="#">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a className="wishlist_btn" href="#"><i className="fal fa-heart"></i></a>
                  <a className="item_image" href="#">
                    <img src={item_02} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">LIGHTLY ROASTED COFFEE BEANS</a>
                    </h3>
                    <p>Our Lightly Roasted Coffee Beans offer the world a chance to brighten every day with a whole lot of flavor and inspiration. Try these to receive the perfect balance between bold flavor and subtle sweetness.</p>
                    <div className="btns_group">
                      <span className="item_price bg_default_brown">$101</span>
                      <a className="btn btn_border border_black text-uppercase" href="#">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="shop_card wow fadeInUp" data-wow-delay=".3s">
                  <a className="wishlist_btn" href="#"><i className="fal fa-heart"></i></a>
                  <a className="item_image" href="#">
                    <img src={item_03} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">COLUMBIAN BLENDED ESPRESSO BEANS</a>
                    </h3>
                    <p>Skillfully roasted and carefully blended, our Columbian Blended Espresso Beans don’t just wake you up in the morning, they pack a lasting punch that is sure to leave you wanting more. Silky smooth and full of layered flavors, there’s really no better way to start your day.</p>
                    <div className="btns_group">
                      <span className="item_price bg_default_brown">$101</span>
                      <a className="btn btn_border border_black text-uppercase" href="#">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Shop