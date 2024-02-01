import React from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import coffee_table from "../assets/images/about/coffee_table_image.webp";

const About = () => {
  return (
    <section className="about_section sec_ptb_120 pb-0">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 col-md-6 order-last">
                <div className="about_image2">
                  <img className="wow fadeInUp" data-wow-delay=".1s" src={coffee_table} alt="image_not_found" style={{borderRadius: "50%"}}/>
                  <div className="year_content_wrap text-uppercase">
                    <span className="wow fadeInUp" data-wow-delay=".2s">Since....</span>
                    <strong className="wow fadeInUp" data-wow-delay=".3s">2023</strong>
                  </div>
                  
                </div>
              </div>

              <div className="col-lg-5 col-md-6">
                <div className="about_content">
                  <div className="section_title text-uppercase">
                    <h2 className="small_title wow fadeInUp" data-wow-delay=".1s"><i className="fas fa-coffee"></i> about us</h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Coffee runs in our blood. At Nick's Roasting Co., we pick and brew the best beans to make sure the coffee you enjoy will be a unique and satisfying experience for both body and mind. We’re proud that our Coffee Shop has been a staple of Sacramento coffee lovers since 2023. Check out our products and best sellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About