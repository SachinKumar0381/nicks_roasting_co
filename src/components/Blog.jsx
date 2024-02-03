import React from 'react'

import  "../assets/css/bootstrap.min.css"
import "../assets/css/fontawesome.css";
import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/style.css";

import img_01 from "../assets/images/blog/img_01.png";

const Blog = () => {
  return (
    <section className="blog_section sec_ptb_120">
          <div className="container">

            <div className="section_title text-uppercase text-center">
              <h2 className="small_title wow fadeInUp" data-wow-delay=".1s"><i className="fas fa-coffee"></i> Blog</h2>
              <h3 className="big_title wow fadeInUp" data-wow-delay=".2s">Latest Blog</h3>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog_grid wow fadeInUp" data-wow-delay=".1s">
                  <a className="item_image" href="#">
                    <img src={img_01} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">TEXT WILL BE COMING SOON...</a>
                    </h3>
                    <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium illo earum placeat laboriosam, beatae aliquam nemo corrupti exercitationem mollitia necessitatibus accusamus quidem, voluptate veniam nostrum, dolor vero similique odit!
                    </p>
                    <a className="btn_text text-uppercase" href="#"><span>Read More</span> <i className="far fa-angle-double-right"></i></a>
                    <ul className="post_meta ul_li">
                      <li><a href="#"> Date : 11/11/1111</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog_grid wow fadeInUp" data-wow-delay=".2s">
                  <a className="item_image" href="#">
                    <img src={img_01} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">TEXT WILL BE COMING SOON...</a>
                    </h3>
                    <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo cupiditate culpa illum dicta perferendis quasi voluptate facilis, impedit, quas nesciunt modi? Excepturi et corrupti voluptatem voluptatibus, officia nostrum ipsa!
                    </p>
                    <a className="btn_text text-uppercase" href="#"><span>Read More</span> <i className="far fa-angle-double-right"></i></a>
                    <ul className="post_meta ul_li">
                      <li><a href="#"> Date : 11/11/1111</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog_grid wow fadeInUp" data-wow-delay=".3s">
                  <a className="item_image" href="#">
                    <img src={img_01} alt="image_not_found"/>
                  </a>
                  <div className="item_content">
                    <h3 className="item_title text-uppercase">
                      <a href="#">TEXT WILL BE COMING SOON...</a>
                    </h3>
                    <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quam doloribus, in dolores aliquid nihil repudiandae quasi laborum aliquam iure natus saepe dolore tempora ducimus sint ut possimus laudantium quisquam!
                    </p>
                    <a className="btn_text text-uppercase" href="#"><span>Read More</span> <i className="far fa-angle-double-right"></i></a>
                    <ul className="post_meta ul_li">
                      <li><a href="#"> Date : 11/11/1111</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btns_group ul_li wow fadeInUp center-btn" data-wow-delay=".4s">
                    <div><a className="btn btn_primary text-uppercase" href="#">SEE ALL</a></div>
                  </div>
        </section>
  )
}

export default Blog