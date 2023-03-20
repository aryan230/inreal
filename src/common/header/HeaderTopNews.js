import { useState } from "react";
import { FiX, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderTopNews = () => {
  const [deactive, setClass] = useState("");
  return (
    <div
      className={`header-top-news bg_image ${deactive}`}
      style={{ backgroundImage: `black` }}
    >
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="content">
                  <span className="rn-badge">Limited Time Offer</span>
                  <span className="news-text">
                    Intro price. Let Inreal Build Your Dream Website for
                    <strong>-95% off.</strong>
                  </span>
                </div>
                <div className="right-button">
                  <Link className="btn-read-more" target="_blank" to="/">
                    <span>
                      Redeem Now <FiArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-close">
        <button className="close-button" onClick={() => setClass("deactive")}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default HeaderTopNews;
