import React from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import bg_06 from "../assets/images/backgrounds/bg_06.png";
import scratch_01 from "../assets/images/decorations/scratch_01.png";
import BackGroundSlider from './BackGroundSlider';
import img_05 from "../assets/images/banner/image_05.jpg";
import img_06 from "../assets/images/banner/image_06.jpg";
import img_08 from "../assets/images/banner/image_08.jpg";
import img_09 from "../assets/images/banner/image_09.jpg";

const Banner = () => {
  const images = [
    img_05,
    img_06,
    img_08,
    img_09
  ];

  return (
    <section className="banner_section deco_wrap overflow-hidden" style={{backgroundImage: `url(${bg_06})`}}>
      <BackGroundSlider images={images}/>
          <div className="deco_item" data-wow-delay=".4s" style={{zIndex:"9",paddingLeft:"10%",paddingBottom:"5vh"}}>
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-7">
                <div className="banner_content text-white">
                  <h1 className="banner_title text-white text-uppercase wow fadeInUp" data-wow-delay=".2s">WELCOME TO NICK'S ROASTING CO.</h1>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Good to the Last Sip
                  </p>
                  <ul className="btns_group ul_li wow fadeInUp" data-wow-delay=".4s">
                    <li><a className="btn btn_primary text-uppercase" href="#">Shop Now</a></li>
                    <li><a className="btn btn_border border_white text-uppercase" href="#">Subscribe</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div style={{zIndex:"9",width:"100%",position:"absolute",top:"99vh"}}>
            <img src={scratch_01} alt="" />
          </div>
        </section>
  )
}

export default Banner