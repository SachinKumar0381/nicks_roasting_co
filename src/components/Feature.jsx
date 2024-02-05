import React from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import bg_07 from "../assets/images/backgrounds/bg_07.png";
import icon_01 from "../assets/images/feature/icon_01.png";
import icon_02 from "../assets/images/feature/icon_02.png";
import icon_03 from "../assets/images/feature/icon_03.png";
import icon_04 from "../assets/images/feature/icon_04.png";
import scratch_01 from "../assets/images/decorations/scratch_01.png";

const Feature = () => {
  return (
    <section className="feature_primary_section2 deco_wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".1s">
                  <div className="item_icon">
                    <span className="item_serial">1</span>
                    <img src={icon_01} alt="icon_not_found"/>
                  </div>
                  <h3 className="item_title text-uppercase">Text will be coming soon...</h3>
                  <p className="mb-0">
                    Text will be coming soon...
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".2s">
                  <div className="item_icon">
                    <span className="item_serial">2</span>
                    <img src={icon_02} alt="icon_not_found"/>
                  </div>
                  <h3 className="item_title text-uppercase">Text will be coming soon...</h3>
                  <p className="mb-0">
                    Text will be coming soon...
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".3s">
                  <div className="item_icon">
                    <span className="item_serial">3</span>
                    <img src={icon_03} alt="icon_not_found"/>
                  </div>
                  <h3 className="item_title text-uppercase">Text will be coming soon...</h3>
                  <p className="mb-0">
                    Text will be coming soon...
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".4s">
                  <div className="item_icon">
                    <span className="item_serial">4</span>
                    <img src={icon_04} alt="icon_not_found"/>
                  </div>
                  <h3 className="item_title text-uppercase">Text will be coming soon...</h3>
                  <p className="mb-0">
                    Text will be coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="scratch scratch_bottom">
            <img src={scratch_01} alt="image_not_found"/>
          </div>
        </section>
  )
}

export default Feature