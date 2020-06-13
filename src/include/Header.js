import React from "react";

function Header() {
  return (
    <div>
      <div>
        <div className="nav-menu">
          <div className="bg transition">
            <div className="container-fluid fixed">
              <div className="row">
                <div className="col-md-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">
                      Resto Plus
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-menu" />
                    </button>
                    <div
                      className="collapse navbar-collapse justify-content-end"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Explore
                            <span className="icon-arrow-down" />
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="navbarDropdownMenuLink1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Listing
                            <span className="icon-arrow-down" />
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="navbarDropdownMenuLink2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Pages
                            <span className="icon-arrow-down" />
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn btn-outline-light top-btn">
                            <span className="ti-plus" /> Add Listing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default Header;
