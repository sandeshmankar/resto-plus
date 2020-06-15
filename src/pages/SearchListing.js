import React from "react";

function SearchListing() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 responsive-wrap">
              <div className="row detail-filter-wrap">
                <div className="col-md-4 featured-responsive">
                  <div className="detail-filter-text">
                    <p>
                      34 Results For <span>Restaurant</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-8 featured-responsive">
                  <div className="detail-filter">
                    <p>Filter by</p>
                    <form className="filter-dropdown">
                      <select
                        className="custom-select mb-2 mr-sm-2 mb-sm-0"
                        id="inlineFormCustomSelect"
                      >
                        <option selected>Best Match</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </form>
                    <form className="filter-dropdown">
                      <select
                        className="custom-select mb-2 mr-sm-2 mb-sm-0"
                        id="inlineFormCustomSelect1"
                      >
                        <option selected>Restaurants</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </form>
                    <div className="map-responsive-wrap">
                      <a className="map-icon" href="#">
                        <span className="icon-location-pin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row detail-checkbox-wrap">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">
                      Bike Parking
                    </span>
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">
                      Wireless Internet
                    </span>
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">
                      Smoking Allowed
                    </span>
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">
                      Street Parking
                    </span>
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">Special</span>
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">
                      Accepts Credit cards
                    </span>
                  </label>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">
                      Pets Friendly
                    </span>
                  </label>
                </div>
              </div>
              <div className="row light-bg detail-options-wrap">
                <div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
                  <div className="featured-place-wrap">
                    <a href="detail.html">
                      <img
                        src="assets/images/featured1.jpg"
                        className="img-fluid"
                        alt="#"
                      />
                      <span className="featured-rating-orange ">6.5</span>
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
                <div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
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
                          <div className="open-now">OPEN NOW</div>
                          <span className="ti-heart" />
                          <span className="ti-bookmark" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
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
                          <div className="closed-now">CLOSED NOW</div>
                          <span className="ti-heart" />
                          <span className="ti-bookmark" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
                  <div className="featured-place-wrap">
                    <a href="detail.html">
                      <img
                        src="assets/images/featured4.jpg"
                        className="img-fluid"
                        alt="#"
                      />
                      <span className="featured-rating-green">9.5</span>
                      <div className="featured-title-box">
                        <h6>Pizza - Cicis</h6>
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
              </div>
            </div>
            <div className="col-md-5 responsive-wrap map-wrap">
              <div className="map-fix">
                {/* data-toggle="affix" */}
                {/* Google map will appear here! Edit the Latitude, Longitude and Zoom Level below using data-attr-*  */}
                <div
                  id="map"
                  data-lat="40.674"
                  data-lon="-73.945"
                  data-zoom={14}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchListing;
