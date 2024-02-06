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
            <div className="section_title text-uppercase text-center">
              <h2 className="small_title wow fadeInUp" data-wow-delay=".2s"><i className="fas fa-coffee"></i> HOW IT WORKS</h2>
            </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".1s">
                  <div className="item_icon">
                    <span className="item_serial">1</span>
                    STEP
                  </div>
                  <h3 className="item_title text-uppercase">CHOOSE YOUR COFFEE</h3>
                  <p className="mb-0">
                  Get started with our Starter Kit, which includes a selection of our most popular coffee blends. You can choose from whole bean or ground coffee, and we offer a range of roasts to suit your taste.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".2s">
                  <div className="item_icon">
                    <span className="item_serial">2</span>
                    STEP
                  </div>
                  <h3 className="item_title text-uppercase">SELECT YOUR GRIND TYPE</h3>
                  <p className="mb-0">
                  Let our expert roasters select the perfect coffee for you with our Roaster's Picks subscription. Each month, we will send you a different coffee selected by our roasters, so you can try a variety of blends and roasts.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".3s">
                  <div className="item_icon">
                    <span className="item_serial">3</span>
                    STEP
                  </div>
                  <h3 className="item_title text-uppercase">SELECT YOUR DELIVERY FREQUENCY</h3>
                  <p className="mb-0">
                  Join our Coffee of the Month club and receive a different coffee each month, carefully selected by our roasters. With this subscription, you'll be able to try a range of coffee flavors and roasts, and discover new favorites.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="feature_primary wow fadeInUp" data-wow-delay=".4s">
                  <div className="item_icon">
                    <span className="item_serial">4</span>
                    STEP
                  </div>
                  <h3 className="item_title text-uppercase">ENJOY FRESH COFFEE DELIVERED TO YOUR DOOR</h3>
                  <p className="mb-0">
                  We roast our coffee in small batches, ensuring maximum freshness and flavor in every bag you receive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Feature