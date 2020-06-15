import React from "react";
import UserReview from "../components/ListingDetails/UserReview";
import ListingSlider from "../components/ListingDetails/ListingSlider";
import ListingDescription from "../components/ListingDetails/ListingDescription";


function ListingDetails() {
  return (
    <div>
      {/*//END HEADER */}
      {/*============================= BOOKING =============================*/}
       <ListingSlider/> 
      {/*//END BOOKING */}
      {/*============================= RESERVE A SEAT =============================*/}
      <section className="reserve-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Tasty Hand-Pulled Noodles</h5>
              <p>
                <span>$$$</span>$$
              </p>
              <p className="reserve-description">
                Innovative cooking, paired with fine wines in a modern setting.
              </p>
            </div>
            <div className="col-md-6">
              <div className="reserve-seat-block">
                <div className="reserve-rating">
                  <span>9.5</span>
                </div>
                <div className="review-btn">
                  <a href="#" className="btn btn-outline-danger">
                    WRITE A REVIEW
                  </a>
                  <span>34 reviews</span>
                </div>
                <div className="reserve-btn">
                  <div className="featured-btn-wrap">
                    <a href="#" className="btn btn-danger">
                      RESERVE A SEAT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//END RESERVE A SEAT */}
      {/*============================= BOOKING DETAILS =============================*/}
      <section className="light-bg booking-details_wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-8 responsive-wrap">
              <ListingDescription />
              <UserReview />
            </div>
            <div className="col-md-4 responsive-wrap">
              <div className="contact-info">
                <img src="assets/images/map.jpg" className="img-fluid" alt="#" />
                <div className="address">
                  <span className="icon-location-pin" />
                  <p>
                    {" "}
                    Doyers St
                    <br /> New York, NY 10013
                    <br /> b/t Division St &amp; St James Pl <br /> Chinatown,
                    Civic Center
                  </p>
                </div>
                <div className="address">
                  <span className="icon-screen-smartphone" />
                  <p> +44 20 7336 8898</p>
                </div>
                <div className="address">
                  <span className="icon-link" />
                  <p>https://burgerandlobster.com</p>
                </div>
                <div className="address">
                  <span className="icon-clock" />
                  <p>
                    Mon - Sun 09:30 am - 05:30 pm <br />
                    <span className="open-now">OPEN NOW</span>
                  </p>
                </div>
                <a href="#" className="btn btn-outline-danger btn-contact">
                  SEND A MESSAGE
                </a>
              </div>
              <div className="follow">
                <div className="follow-img">
                  <img
                    src="images/follow-img.jpg"
                    className="img-fluid"
                    alt="#"
                  />
                  <h6>Christine Evans</h6>
                  <span>New York</span>
                </div>
                <ul className="social-counts">
                  <li>
                    <h6>26</h6>
                    <span>Listings</span>
                  </li>
                  <li>
                    <h6>326</h6>
                    <span>Followers</span>
                  </li>
                  <li>
                    <h6>12</h6>
                    <span>Followers</span>
                  </li>
                </ul>
                <a href="#">FOLLOW</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingDetails;
