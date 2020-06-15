import React from "react";

function Footer() {
  return (
    <div>
      <footer className="main-block dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <p>
                  Copyright © 2018 Listing. All rights reserved | This template
                  is made with <i className="ti-heart" aria-hidden="true" /> by{" "}
                  <a href="#" target="_blank">
                    Sandesh
                  </a>
                </p>

                <ul>
                  <li>
                    <a href="#">
                      <span className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ti-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
