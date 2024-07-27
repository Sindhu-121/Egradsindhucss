import React from "react";
import "./style/Section3.css";
import playground from "./images/cloud-playground.webp";
import practice from "./images/practice-exams.webp";
import labs from "./images/hands-on-labs.webp";
const Section3 = () => {
  return (
    <div className="Section3">
      <div className="Playground">
        <h2>What’s it like?</h2>
        <h1>Learn by doing</h1>
        <p>
          Our learn-by-doing method gets you hands-on with the cloud, so you can
          build practical experience that sticks. 85% 
        </p>
        <p>of our learners say they
        retain more when they learn by doing.</p>

        <div className="sandboxes">
          <div className="playground1">
            <img src={playground} />
            <h3>Cloud Playground</h3>
            <div>
              Learn by doing with live Cloud Playground AWS, Azure, and GCP
              sandboxes. Cloud along with courses, test ideas, and prep for
              exams.
            </div>
          </div>

          <div className="playground1">
            <img src={practice} />
            <h3>Practice Exams</h3>
            <div>
              Pass on the first try. Prep for certifications with practice exams
              that mimic the real thing. And get personalized pointers on how to
              improve.
            </div>
          </div>

          <div className="playground1">
            <img src={labs} />
            <h3>Hands-on Labs</h3>
            <div>
              Learn new skills faster and get your hands cloudy with thousands
              of real, guided labs on all things cloud from novice to guru.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
