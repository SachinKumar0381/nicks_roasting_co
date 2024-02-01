import React from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import bg_08 from "../assets/images/backgrounds/bg_08.png";
import logo_white_1x from "../assets/images/logo/logo_white_1x.png";
import item_01 from "../assets/images/menu/bbd48b_196047ee5e4f4c1299794cc275f948ba~mv2.webp";
import scratch_02 from "../assets/images/decorations/scratch_02.png";

const Footer = () => {
  return (
    <footer className="footer_section text-white deco_wrap" style={{backgroundImage: `url(${bg_08})`}}>
        <div className="footer_widget_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-7">
                <div className="footer_subscribe_form text-center">
                  <h2 className="form_title text-uppercase wow fadeInUp" data-wow-delay=".1s">TEXT WILL BE COMING SOON...</h2>
                  <form action="#">
                    <div className="form_item wow fadeInUp" data-wow-delay=".2s">
                      <input type="email" name="email" placeholder="Enter your email"/>
                      <button className="btn btn_primary text-uppercase" type="submit">Subscribe Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row justify-content-lg-between">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer_widget footer_about wow fadeInUp" data-wow-delay=".1s">
                  <div className="brand_logo">
                    <a className="brand_link" href="#">
                      <img src={logo_white_1x} srcset={logo_white_1x} alt="logo_not_found"/>
                    </a>
                  </div>

                  <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore error, est aut distinctio molestiae voluptatum? Corrupti, eos laudantium voluptatibus optio itaque esse rem odio voluptatem, culpa natus, distinctio voluptatum!
                  </p>

                  <ul className="social_links social_icons ul_li">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer_widget footer_contact wow fadeInUp" data-wow-delay=".2s">
                  <h3 className="footer_widget_title text-uppercase">Contact us</h3>
                  <ul className="ul_li_block">
                    <li><strong className="text-uppercase">Adress:</strong> 2558 Greenwood Lane, 120 Cameron Park, CA 95682</li>
                    <li><strong className="text-uppercase">Mail:</strong> Info@nicksroastingco.com</li>
                    <li><strong className="text-uppercase">Phone:</strong> 1 800 297 4001</li>
                    <li><strong className="text-uppercase">Fax id:</strong> +9876543210</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer_widget footer_opening_time wow fadeInUp" data-wow-delay=".3s">
                  <h3 className="footer_widget_title text-uppercase">Opening Hours</h3>
                  <ul className="ul_li_block">
                    <li>
                      Monday
                      <span>7:00 - 18:00</span>
                    </li>
                    <li>
                      tuesday
                      <span>7:00 - 18:00</span>
                    </li>
                    <li>
                      wednestday
                      <span>7:00 - 18:00</span>
                    </li>
                    <li>
                      Thusday
                      <span>7:00 - 18:00</span>
                    </li>
                    <li>
                      Friday
                      <span>7:00 - 18:00</span>
                    </li>
                    <li>
                      saterday
                      <span>7:00 - 17:00</span>
                    </li>
                    <li>
                      Sunday
                      <span>7:00 - 17:00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer_widget footer_recent_post wow fadeInUp" data-wow-delay=".4s">
                  <h3 className="footer_widget_title text-uppercase">Recent News</h3>

                  <div className="recent_post">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h4 className="item_title">
                        <a href="#">TITLE ONE TEXT WILL BE COMING SOON...</a>
                      </h4>
                      <span className="post_date text-uppercase">DATE : 11/11/1111</span>
                    </div>
                  </div>

                  <div className="recent_post">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h4 className="item_title">
                        <a href="#">TITLE TWO TEXT WILL BE COMING SOON...</a>
                      </h4>
                      <span className="post_date text-uppercase">DATE : 11/11/1111</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer_bottom text-center" style={{display: "flex", justifyContent: "space-evenly"}}>
            <p className="copyright_text mb-0 wow fadeInUp" data-wow-delay=".1s">Copyright@ 2024 by <a className="btn_text" href="#"><span>Nick's Roasting Co.</span></a></p>
            <p className="copyright_text mb-0 wow fadeInUp" data-wow-delay=".1s">Developed & Desing by <a className="btn_text" href="#"><span>Barodaweb | The E-Catalogue Designe</span></a></p>
          </div>
        </div>

        <div className="scratch scratch_top">
          <img src={scratch_02} alt="image_not_found"/>
        </div>
      </footer>
  )
}

export default Footer