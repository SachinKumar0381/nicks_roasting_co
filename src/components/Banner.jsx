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
import item_01 from "../assets/images/shop/11062b_2974cb752e974ea192d619ea0d64120d~mv2.webp";
import item_02 from "../assets/images/shop/11062b_54b0313b65a44b479c9f065e126f7c06~mv2.webp";
import item_03 from "../assets/images/shop/11062b_ca88a6f079324d7c98963f33c1f2d48f~mv2.webp";
import BackGroundSlider from './BackGroundSlider';

const Banner = () => {
  const images = [
    bg_06,
    item_01,
    item_02,
    item_03
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
                    <li><a className="btn btn_primary text-uppercase" href="#">testy Coffee</a></li>
                    <li><a className="btn btn_border border_white text-uppercase" href="#">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="deco_big_text text-uppercase">
            <div className="container wow fadeInUp" data-wow-delay=".1s">
              Nick's Roasting
            </div>
          </div>
          <div style={{zIndex:"9",width:"100%",position:"absolute",top:"99vh"}}>
            <img src={scratch_01} alt="" />
          </div>
        </section>
  )
}

export default Banner