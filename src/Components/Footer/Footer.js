import React from "react";

export const Footer = () => {
  return (
    <>
      <div>
        <footer id="footer" className="footer">
          <div className="container">
            <div className="row">
              <article className="col-lg-4 col-sm-4 col-xs-12">
                <img
                  className="footer_logo"
                  src="img/footer_logo.png"
                  alt="footer_logo"
                />
                <div className="copyright">
                  &copy; <span id="copyright-year"></span> |{" "}
                  <a href="index-5.html">Privacy Policy</a>
                </div>

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

                <div className="footer_link"></div>
              </article>

              <article className="col-lg-4 col-sm-4 col-xs-12">
                <h4>our Location</h4>
                <h5>
                  9870 St Vincent Place,
                  <br />
                  Glasgow, DC 45 Fr 45.
                  <br />
                  Freephone: +1 800 559 6580 <br />
                  Telephone: +1 800 603 6035
                  <br />
                  FAX: +1 800 889 9898
                </h5>
              </article>

              <article className="col-lg-4 col-sm-4 col-xs-12">
                <h4>newsletter</h4>

                <form id="form1">
                  <fieldset>
                    <div className="success">
                      Your subscribe request has been sent!
                    </div>

                    <label className="email">
                      <input type="email" value="Enter Your Email" />
                      <span className="error">
                        *This is not a valid email address.
                      </span>
                      <a href="#" className="button" data-type="submit">
                        OK
                      </a>
                    </label>
                  </fieldset>
                </form>
                <h5>unsubscribe</h5>
              </article>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
