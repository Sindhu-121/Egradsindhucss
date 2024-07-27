import React from "react";
import "./style/Section1.css"
import img1 from "./images/cloud-home-hero.webp";
import aws from "./images/topic-aws.webp";
import gcp from "./images/topic-gcp.webp";
import cloud from "./images/topic-cloud.webp";
import devops from "./images/topic-devops.webp";
import security from "./images/topic-security.webp";
import kubernetes from "./images/topic-kubernetes.webp";
import terraform from "./images/topic-terraform.webp";
import azure from "./images/topic-azure.webp";
const Section1 = () => {
  return (
    <div className="section1maindiv">
      <div className="leaderdiv1">
        <div className="leaderdiv2">
          <h3 className="leaderh31">The leader in cloud learning</h3>
          <h1 className="leaderh11">Create a culture of cloud 
            innovation</h1>
          <h3 className="leaderh32">
            Accelerate cloud success with hands-on learning at scale. Upskill 10
            or 10,000 with the most comprehensive and up-to-date learning
            library.
          </h3>
          <div className="view">
          <div className="try">View plans</div>
          <div className="Contact">
            <i class="fa-solid fa-circle-play"></i>Watch video
          </div>
          </div>
        </div>
        <img src={img1} alt="Your SVG"  className="img1"/>
      </div>
      <div className="section1maindiv2">
        <div className="courses"> 
        <h3 className="coursesh3">
        400+ courses and 1,800+ hands-on labs
        </h3>
        <div className="Browsediv">Browse all courses <i class="fa-solid fa-chevron-right"></i></div>
        </div>
        
        <div className="imeages">
          <div className="svg"></div>
        <img src={aws} alt="Your SVG"  className="img11"/>
        <img src={azure} alt="Your SVG"  className="img11"/>
        <img src={gcp} alt="Your SVG"  className="img11"/>
        <img src={cloud} alt="Your SVG"  className="img11"/>
        <img src={devops} alt="Your SVG"  className="img11"/>
        <img src={security} alt="Your SVG"  className="img11"/>
        <img src={kubernetes} alt="Your SVG"  className="img11"/>
        <img src={terraform} alt="Your SVG"  className="img11"/>
        </div>
      </div>
    </div>
  );
};

export default Section1;
