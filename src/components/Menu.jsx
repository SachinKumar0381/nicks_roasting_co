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
import item_01 from "../assets/images/menu/bbd48b_196047ee5e4f4c1299794cc275f948ba~mv2.webp";
import scratch_02 from "../assets/images/decorations/scratch_02.png";
import scratch_01 from "../assets/images/decorations/scratch_01.png";

const Menu = () => {
  return (
    <section className="recipe_menu_section sec_ptb_120 deco_wrap text-white" style={{backgroundImage: `url(${bg_08})`}}>
          <div className="container">
            <div className="section_title text-uppercase text-center">
              <h2 className="small_title text-white wow fadeInUp" data-wow-delay=".2s"><i className="fas fa-coffee"></i> Our Menu</h2>
              <h3 className="big_title text-white wow fadeInUp" data-wow-delay=".3s">
                NICK'S ROASTING CO.
              </h3>
            </div>

            <ul className="filters-button-group style_2 ul_li_center wow fadeInUp" data-wow-delay=".4s">
              <li><button className="button text-uppercase active" data-filter=".chocolate">tea</button></li>
              <li><button className="button text-uppercase" data-filter=".coffee">coffee</button></li>
              <li><button className="button text-uppercase" data-filter=".sandwiches">iced</button></li>
              <li><button className="button text-uppercase" data-filter=".sweets">blended</button></li>
              <li><button className="button text-uppercase" data-filter=".blacktea">energy</button></li>
              <li><button className="button text-uppercase" data-filter=".greantea">boba</button></li>
              <li><button className="button text-uppercase" data-filter=".greantea">food</button></li>
              <li><button className="button text-uppercase" data-filter="*">all</button></li>
            </ul>

            <div className="recipe_item_grid grid wow fadeInUp" data-wow-delay=".5s">
              <div className="element-item chocolate greantea " data-category="chocolate">
                <div className="recipe_item style_2">
                  <div className="content_col">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h3 className="item_title text-uppercase">
                        <a href="#">TEXT WILL BE COMING SOON...</a>
                      </h3>
                      <p className="mb-0">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis placeat optio! Architecto error numquam quas ducimus ex est! Aspernatur, enim accusantium accusamus possimus ex in placeat ratione dolorem tenetur?
                      </p>
                    </div>
                  </div>
                  <div className="content_col">
                    <strong className="item_price">
                      <sub>$</sub>3.5
                    </strong>
                  </div>
                </div>
              </div>

              <div className="element-item coffee blacktea " data-category="coffee">
                <div className="recipe_item style_2">
                  <div className="content_col">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h3 className="item_title text-uppercase">
                        <a href="#">TEXT WILL BE COMING SOON...</a>
                      </h3>
                      <p className="mb-0">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in tempore dolorem est iste ipsam ducimus dicta itaque saepe natus mollitia provident, deleniti quae, fuga earum quibusdam expedita culpa error?
                      </p>
                    </div>
                  </div>
                  <div className="content_col">
                    <strong className="item_price">
                      <sub>$</sub>4.8
                    </strong>
                  </div>
                </div>
              </div>

              <div className="element-item sandwiches sweets " data-category="sandwiches">
                <div className="recipe_item style_2">
                  <div className="content_col">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h3 className="item_title text-uppercase">
                        <a href="#">TEXT WILL BE COMING SOON...</a>
                      </h3>
                      <p className="mb-0">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate esse, explicabo aliquam saepe quos suscipit voluptatibus tempora quae amet voluptas placeat inventore a facilis accusantium repellendus reiciendis architecto at.
                      </p>
                    </div>
                  </div>
                  <div className="content_col">
                    <strong className="item_price">
                      <sub>$</sub>1.6
                    </strong>
                  </div>
                </div>
              </div>

              <div className="element-item sweets sandwiches " data-category="sweets">
                <div className="recipe_item style_2">
                  <div className="content_col">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h3 className="item_title text-uppercase">
                        <a href="#">TEXT WILL BE COMING SOON...</a>
                      </h3>
                      <p className="mb-0">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea beatae doloribus, accusamus voluptatem consectetur labore fuga porro suscipit quod voluptatibus repellendus rerum id mollitia aliquid facere! Quia molestias atque a.
                      </p>
                    </div>
                  </div>
                  <div className="content_col">
                    <strong className="item_price">
                      <sub>$</sub>9.3
                    </strong>
                  </div>
                </div>
              </div>

              <div className="element-item blacktea coffee " data-category="blacktea">
                <div className="recipe_item style_2">
                  <div className="content_col">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h3 className="item_title text-uppercase">
                        <a href="#">TEXT WILL BE COMING SOON...</a>
                      </h3>
                      <p className="mb-0">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam optio eaque delectus veniam, necessitatibus sint officia expedita commodi ullam reiciendis explicabo exercitationem. Amet quod vel incidunt cumque, cupiditate quis.
                      </p>
                    </div>
                  </div>
                  <div className="content_col">
                    <strong className="item_price">
                      <sub>$</sub>0.8
                    </strong>
                  </div>
                </div>
              </div>

              <div className="element-item greantea chocolate " data-category="greantea">
                <div className="recipe_item style_2">
                  <div className="content_col">
                    <a className="item_image" href="#">
                      <img src={item_01} alt="image_not_found"/>
                    </a>
                    <div className="item_content">
                      <h3 className="item_title text-uppercase">
                        <a href="#">TEXT WILL BE COMING SOON...</a>
                      </h3>
                      <p className="mb-0">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus nesciunt voluptate molestias, explicabo dolores optio est fuga omnis placeat harum officia rerum consequuntur tempora. Eveniet quis libero consectetur soluta?
                      </p>
                    </div>
                  </div>
                  <div className="content_col">
                    <strong className="item_price">
                      <sub>$</sub>4.8
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="deco_big_text text-uppercase text-center wow fadeInUp" data-wow-delay=".1s" style={{display:"none"}}>
            Nick's Roasting
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

export default Menu