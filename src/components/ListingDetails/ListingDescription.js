import React from "react";

function ListingDescription() {
  return (
    <div>
      <div className="booking-checkbox_wrap">
        <div className="booking-checkbox">
          <p>
            Tasty Hand-Pulled Noodles is a 1950s style diner located in Madison,
            Wisconsin. Opened in 1946 by Mickey Weidman, and located just across
            the street from Camp Randall Stadium, it has become a popular game
            day tradition amongst many Badger fans. The diner is well known for
            its breakfast selections, especially the Scrambler, which is a large
            mound of potatoes, eggs, cheese, gravy, and a patrons’ choice of
            other toppings.
          </p>
          <p>
            Mickies has also been featured on “Todd’s Taste of the Town” during
            one of ESPN’s college football broadcasts. We are one of the best
            Chinese restaurants in the New York, New York area. We have been
            recognized for our outstanding Chinese &amp; Asian cuisine,
            excellent Chinese menu, and great restaurant specials. We are one of
            the best Chinese restaurants in the New York, New York area. We have
            been recognized for our outstanding Chinese &amp; Asian cuisine,
            excellent Chinese menu, and great restaurant specials.
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="custom-checkbox">
              <span className="ti-check-box" />
              <span className="custom-control-description">Bike Parking</span>
            </label>{" "}
          </div>
          <div className="col-md-4">
            <label className="custom-checkbox">
              <span className="ti-check-box" />
              <span className="custom-control-description">
                Wireless Internet
              </span>
            </label>
          </div>
          <div className="col-md-4">
            <label className="custom-checkbox">
              <span className="ti-check-box" />
              <span className="custom-control-description">
                Smoking Allowed
              </span>
            </label>{" "}
          </div>
          <div className="col-md-4">
            <label className="custom-checkbox">
              <span className="ti-check-box" />
              <span className="custom-control-description">Street Parking</span>
            </label>
          </div>
          <div className="col-md-4">
            <label className="custom-checkbox">
              <span className="ti-check-box" />
              <span className="custom-control-description">Special</span>
            </label>{" "}
          </div>
          <div className="col-md-4">
            <label className="custom-checkbox">
              <span className="ti-check-box" />
              <span className="custom-control-description">
                Accepts Credit cards
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingDescription;
