import React, { Component } from "react";
import Featuresitems from "./Featuresitems";

class Features extends Component {
  render() {
    var { aClass } = this.props;
    return (
      <section className={`agency_featured_area bg_color ${aClass}`}>
        <div className="container">
          <h2
            className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            You SaasLand wherever your
            <br /> business agency
          </h2>
          <div className="features_info">
            <img
              className="dot_img"
              src={require("../../img/home4/dot.png")}
              alt=""
            />
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="work1.png"
              iImg="icon01.png"
              ftitle="Discovery phase:"
              descriptions="The first step is to understand the client's requirements and goals for the project. This includes gathering information about the client's business, target audience, and competition. Once the requirements are gathered, the development team can create a project scope document that outlines the project's goals, timeline, budget, and deliverables."
            />
            <Featuresitems
              rowClass="row agency_featured_item_two"
              aClass="pl_100"
              fimage="work2.png"
              iImg="icon02.png"
              ftitle="Development phase:"
              descriptions="The next step is to begin the development phase. This includes designing the website, coding it, and testing it to ensure it meets the client's requirements. During this phase, the development team should also ensure that the website is responsive, user-friendly, and optimized for search engines."
            />
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="work3.png"
              iImg="icon3.png"
              ftitle="Deployment phase:"
              descriptions="The final step is to deploy the website to the client's server and make it live. The development team should conduct a final testing phase to ensure that the website is functioning properly and there are no bugs or issues. After the website is deployed, the development team should provide the client with training on how to manage and update the website, as well as ongoing maintenance and support."
            />
            <div className="dot middle_dot">
              <span className="dot1"></span>
              <span className="dot2"></span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Features;
