import React from "react";
import { Route, IndexRoute } from "react-router";

function FeaturePlace() {
  return (
    <div>
      <section className="main-block light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="styled-heading">
                <h3>Featured Places</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 featured-responsive">
              <div className="featured-place-wrap">
                <a href="detail.html">
                  <img
                    src="assets/images/featured1.jpg"
                    className="img-fluid"
                    alt="#"
                  />
                  <span className="featured-rating-orange">6.5</span>
                  <div className="featured-title-box">
                    <h6>Burger &amp; Lobster</h6>
                    <p>Restaurant </p> <span>• </span>
                    <p>3 Reviews</p> <span> • </span>
                    <p>
                      <span>$$$</span>$$
                    </p>
                    <ul>
                      <li>
                        <span className="icon-location-pin" />
                        <p>1301 Avenue, Brooklyn, NY 11230</p>
                      </li>
                      <li>
                        <span className="icon-screen-smartphone" />
                        <p>+44 20 7336 8898</p>
                      </li>
                      <li>
                        <span className="icon-link" />
                        <p>https://burgerandlobster.com</p>
                      </li>
                    </ul>
                    <div className="bottom-icons">
                      <div className="closed-now">CLOSED NOW</div>
                      <span className="ti-heart" />
                      <span className="ti-bookmark" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 featured-responsive">
              <div className="featured-place-wrap">
                <a href="detail.html">
                  <img
                    src="assets/images/featured2.jpg"
                    className="img-fluid"
                    alt="#"
                  />
                  <span className="featured-rating-green">9.5</span>
                  <div className="featured-title-box">
                    <h6>Joe’s Shanghai</h6>
                    <p>Restaurant </p> <span>• </span>
                    <p>3 Reviews</p> <span> • </span>
                    <p>
                      <span>$$$</span>$$
                    </p>
                    <ul>
                      <li>
                        <span className="icon-location-pin" />
                        <p>1301 Avenue, Brooklyn, NY 11230</p>
                      </li>
                      <li>
                        <span className="icon-screen-smartphone" />
                        <p>+44 20 7336 8898</p>
                      </li>
                      <li>
                        <span className="icon-link" />
                        <p>https://burgerandlobster.com</p>
                      </li>
                    </ul>
                    <div className="bottom-icons">
                      <div className="closed-now">CLOSED NOW</div>
                      <span className="ti-heart" />
                      <span className="ti-bookmark" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4 featured-responsive">
              <div className="featured-place-wrap">
                <a href="detail.html">
                  <img
                    src="assets/images/featured3.jpg"
                    className="img-fluid"
                    alt="#"
                  />
                  <span className="featured-rating">3.2</span>
                  <div className="featured-title-box">
                    <h6>Tasty Hand-Pulled Noodles</h6>
                    <p>Restaurant </p> <span>• </span>
                    <p>3 Reviews</p> <span> • </span>
                    <p>
                      <span>$$$</span>$$
                    </p>
                    <ul>
                      <li>
                        <span className="icon-location-pin" />
                        <p>1301 Avenue, Brooklyn, NY 11230</p>
                      </li>
                      <li>
                        <span className="icon-screen-smartphone" />
                        <p>+44 20 7336 8898</p>
                      </li>
                      <li>
                        <span className="icon-link" />
                        <p>https://burgerandlobster.com</p>
                      </li>
                    </ul>
                    <div className="bottom-icons">
                      <div className="open-now">OPEN NOW</div>
                      <span className="ti-heart" />
                      <span className="ti-bookmark" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="featured-btn-wrap">
                <a href="#" className="btn btn-danger">
                  VIEW ALL
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturePlace;
