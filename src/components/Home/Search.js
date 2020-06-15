import React from "react";
import { Route, IndexRoute } from "react-router";

function Search() {
  return (
    <div>
      <section className="slider d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="slider-title_box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-content_wrap">
                      <h1>Discover great places in New york</h1>
                      <h5>
                        Let's uncover the best places to eat, drink, and shop
                        nearest to you.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10">
                    <form className="form-wrap mt-4">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <input
                          type="text"
                          placeholder="What are your looking for?"
                          className="btn-group1"
                        />
                        <input
                          type="text"
                          placeholder="New york"
                          className="btn-group2"
                        />
                        <button type="submit" className="btn-form">
                          <span className="icon-magnifier search-icon" />
                          SEARCH
                          <i className="pe-7s-angle-right" />
                        </button>
                      </div>
                    </form>
                    <div className="slider-link">
                      <a href="#">Browse Popular</a>
                      <span>or</span> <a href="#">Recently Addred</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
