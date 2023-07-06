import React from "react";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <article className="col-lg-12 col-sm-12 col-xs-12">
            <div
              className="header_top wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <ul className="contact_list">
                <li className="item1">
                  9870 St Vincent Place, Glasgow, DC 45 Fr 45.
                </li>
                <li className="item2">
                  <a href="#">contact@demolink.org</a>
                </li>
                <li className="item3">+1 800 559 6580</li>
              </ul>

              <ul className="soc_icons">
                <li className="item1">
                  <a href="#"></a>
                </li>
                <li className="item2">
                  <a href="#"></a>
                </li>
                <li className="item3">
                  <a href="#"></a>
                </li>
                <li className="item4">
                  <a href="#"></a>
                </li>
                <li className="item5">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <div id="stuck_container">
        <div className="container">
          <div className="row">
            <article className="col-lg-12 col-sm-12 col-xs-12">
              <div className="top_bg">
                <div className="row">
                  <article className="col-lg-3 col-sm-12 col-xs-12">
                    <h1 className="logo">
                      <a href="index.html">
                        <img
                          alt="logo"
                          src="../public/assets/assets/img/logo.png"
                        />
                      </a>
                    </h1>
                  </article>

                  <article className="col-lg-9 col-sm-12 col-xs-12">
                    <div className="menuheader">
                      <NavBar />
                    </div>
                  </article>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
