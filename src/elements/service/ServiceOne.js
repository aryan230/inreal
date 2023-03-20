import React from "react";
import {
  FiActivity,
  FiCast,
  FiMap,
  FiShoppingBag,
  FiShoppingCart,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: <FiActivity />,
    title: "Web Design and Development",
    description:
      "Creating custom websites that are visually appealing, user-friendly and optimized for search engines.",
  },
  {
    icon: <FiShoppingBag />,
    title: "E-commerce Development",
    description:
      "Developing e-commerce websites that are easy to manage and provide a smooth buying experience for your customers.",
  },
  {
    icon: <FiCast />,
    title: "Design & Creative",
    description:
      "Crafting visually stunning and effective marketing collateral to help businesses stand out in a crowded market.",
  },
];

const ServiceOne = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">{val.icon}</div>
              <div className="content">
                <h4 className="title w-600">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: val.title }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{ __html: val.description }}
                ></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceOne;
