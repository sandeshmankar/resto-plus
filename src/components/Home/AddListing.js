import React from "react";

function AddListing() {
  return (
    <div>
      <section className="main-block light-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="add-listing-wrap">
                <h2>Reach millions of People</h2>
                <p>
                  Add your Business infront of millions and earn 3x profits from
                  our listing
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="featured-btn-wrap">
                <a href="#" className="btn btn-danger">
                  <span className="ti-plus" /> ADD LISTING
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddListing;
