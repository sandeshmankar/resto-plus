import React from "react";

function UserReview() {
  return (
    <div>
      <div>
        {/* Swiper */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a
                href="assets/images/reserve-slide2.jpg"
                className="grid image-link"
              >
                <img
                  src="assets/images/reserve-slide2.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a
                href="assets/images/reserve-slide1.jpg"
                className="grid image-link"
              >
                <img
                  src="assets/images/reserve-slide1.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a
                href="assets/images/reserve-slide3.jpg"
                className="grid image-link"
              >
                <img
                  src="assets/images/reserve-slide3.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a
                href="assets/images/reserve-slide1.jpg"
                className="grid image-link"
              >
                <img
                  src="assets/images/reserve-slide1.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a
                href="assets/images/reserve-slide2.jpg"
                className="grid image-link"
              >
                <img
                  src="assets/images/reserve-slide2.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </a>
            </div>
            <div className="swiper-slide">
              <a
                href="assets/images/reserve-slide3.jpg"
                className="grid image-link"
              >
                <img
                  src="assets/images/reserve-slide3.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </a>
            </div>
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination swiper-pagination-white" />
          {/* Add Arrows */}
          <div className="swiper-button-next swiper-button-white" />
          <div className="swiper-button-prev swiper-button-white" />
        </div>
      </div>
    </div>
  );
}

export default UserReview;
