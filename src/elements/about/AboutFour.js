import React from "react";
import VideoTwo from "../video/VideoTwo";
import { FiCheck } from "react-icons/fi";

const PopupData = [
  {
    id: "01",
    image: "./images/bg/bg-image-4.jpg",
    popupLink: ["https://www.youtube.com/watch?v=xshEZzpS4CQ"],
  },
];

const AboutFour = ({ image }) => {
  return (
    <div className="about-area about-style-4 rn-section-gap">
      <div className="container">
        <div className="row row--40 align-items-center">
          <div className="col-lg-6">
            {PopupData.map((item) => (
              <div className="video-btn" key={item.id}>
                <VideoTwo imagename={`${image}`} galleryItem={item} />
              </div>
            ))}
          </div>
          <div className="col-lg-6 mt_md--40 mt_sm--40">
            <div className="content">
              <div className="inner">
                <h3 className="title">
                  Inreal specializes in <br /> all type's of{" "}
                  <strong>Business.</strong>
                </h3>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">
                        Custom Web Design and Development
                      </h4>
                      <p className="text">
                        We offer affordable web design and development services
                        to businesses of all sizes.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FiCheck />
                    </div>
                    <div className="title-wrapper">
                      <h4 className="title">Website Maintenance and Support</h4>
                      <p className="text">
                        We provide ongoing website maintenance and support
                        services to ensure that your website remains up-to-date,
                        secure, and performing optimally.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="about-btn mt--30">
                  <a className="btn-default" href="#">
                    About Inreal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
