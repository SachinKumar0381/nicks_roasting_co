import React from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import couple from "../assets/images/offer/Couple_Drinking_Coffee.webp";
import coffee_bean from "../assets/images/offer/coffe_beans_image.png";
import scratch_02 from "../assets/images/decorations/scratch_02.png";
import scratch_01 from "../assets/images/decorations/scratch_01.png";

const Service = () => {
  return (
    <section className="offer_section deco_wrap">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-4">
                <div className="offer_video wow fadeIn" data-wow-delay=".1s">
                  <div className="overlay"></div>
                  <img src={couple} alt="image_not_found"/>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="offer_area bg_gray" style={{height: "100%"}}>
                  <div className="offer_image wow fadeInUp" data-wow-delay=".1s">
                    <img src={coffee_bean} alt="image_not_found"/>
                  </div>
                  <div className="offer_content">
                    <div className="section_title text-uppercase">
                      <h2 className="small_title wow fadeInUp" data-wow-delay=".2s"><i className="fas fa-coffee"></i> Outstanding Quality</h2>
                      <h3 className="big_title wow fadeInUp" data-wow-delay=".3s">
                        SATISFACTION GUARANTEED
                      </h3>
                    </div>

                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      Harmonious balance of flavor aroma, and texture. Well- roasted beans, showcasing distinct notes without bitterness, and rich satisfying taste. The freshness of the beans, the brewing method and attention to detail in the entire process contribute to the exceptional coffee experience.
                    </p>
                    <p className="mb-0 wow fadeInUp" data-wow-delay=".5s">
                      Harmonious balance of flavor aroma, and texture. Well- roasted beans, showcasing distinct notes without bitterness, and rich satisfying taste. The freshness of the beans, the brewing method and attention to detail in the entire process contribute to the exceptional coffee experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scratch scratch_top">
            <img src={scratch_02} alt="image_not_found"/>
          </div>
          <div className="scratch scratch_bottom">
            <img src={scratch_01} alt="image_not_found"/>
          </div>
        </section>
  )
}

export default Service