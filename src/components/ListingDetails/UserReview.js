import React from "react";

function UserReview() {
  return (
    <div>
      <div className="booking-checkbox_wrap mt-4">
        <h5>34 Reviews</h5>
        <hr />
        <div className="customer-review_wrap">
          <div className="customer-img">
            <img
              src="assets/images/customer-img1.jpg"
              className="img-fluid"
              alt="#"
            />
            <p>Amanda G</p>
            <span>35 Reviews</span>
          </div>
          <div className="customer-content-wrap">
            <div className="customer-content">
              <div className="customer-review">
                <h6>Best noodles in the Newyork city</h6>
                <span />
                <span />
                <span />
                <span />
                <span className="round-icon-blank" />
                <p>Reviewed 2 days ago</p>
              </div>
              <div className="customer-rating">8.0</div>
            </div>
            <p className="customer-text">
              I love the noodles here but it is so rare that I get to come here.
              Tasty Hand-Pulled Noodles is the best type of whole in the wall
              restaurant. The staff are really nice, and you should be seated
              quickly. I usually get the hand pulled noodles in a soup. House
              Special #1 is amazing and the lamb noodles are also great. If you
              want your noodles a little chewier, get the knife cut noodles,
              which are also amazing. Their dumplings are great dipped in their
              chili sauce.
            </p>
            <p className="customer-text">
              I love how you can see into the kitchen and watch them make the
              noodles and you can definitely tell that this is a family run
              establishment. The prices are are great with one dish maybe being
              $9. You just have to remember to bring cash.
            </p>
            <ul>
              <li>
                <img
                  src="assets/images/review-img1.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </li>
              <li>
                <img
                  src="assets/images/review-img2.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </li>
              <li>
                <img
                  src="assets/images/review-img3.jpg"
                  className="img-fluid"
                  alt="#"
                />
              </li>
            </ul>
            <span>28 people marked this review as helpful</span>
            <a href="#">
              <span className="icon-like" />
              Helpful
            </a>
          </div>
        </div>
        <hr />
        <div className="customer-review_wrap">
          <div className="customer-img">
            <img
              src="assets/images/customer-img2.jpg"
              className="img-fluid"
              alt="#"
            />
            <p>Kevin W</p>
            <span>17 Reviews</span>
          </div>
          <div className="customer-content-wrap">
            <div className="customer-content">
              <div className="customer-review">
                <h6>A hole-in-the-wall old school shop.</h6>
                <span className="customer-rating-red" />
                <span className="round-icon-blank" />
                <span className="round-icon-blank" />
                <span className="round-icon-blank" />
                <span className="round-icon-blank" />
                <p>Reviewed 3 months ago</p>
              </div>
              <div className="customer-rating customer-rating-red">2.0</div>
            </div>
            <p className="customer-text">
              The dumplings were so greasy...the pan-fried shrimp noodles were
              the same. So much oil and grease it was difficult to eat. The
              shrimp noodles only come with 3 shrimp (luckily the dish itself is
              cheap){" "}
            </p>
            <p className="customer-text">
              The beef noodle soup was okay. I added black vinegar into the
              broth to give it some extra flavor. The soup has bok choy which I
              liked - it's a nice textural element. The shop itself is really
              unclean (which is the case in many restaurants in Chinatown) They
              don't wipe down the tables after customers have eaten. If you peak
              into the kitchen many of their supplies are on the ground which is
              unsettling...{" "}
            </p>
            <span>10 people marked this review as helpful</span>
            <a href="#">
              <span className="icon-like" />
              Helpful
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReview;
