import React from "react";
import "./style/Section3.css";
import playground from "./images/cloud-playground.webp";
import practice from "./images/practice-exams.webp";
import labs from "./images/hands-on-labs.webp";
import library from "./images/cloud-learning-library .webp"
import amazon from "./images/amazon-web-services.webp"
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

      <div className="subsection">
        <h4>This will teach you</h4>
        <h2>Comprehensive cloud learning library</h2>
        <div>With hundreds of courses and thousands of labs, we give you plenty of room to roam. Whether you’re accelerating your own career or skilling up teams, you can go as broad or as deep as you need, and then some.</div>
        <div>
        We offer full certification training and technical deep dives for Amazon Web Services, Microsoft Azure, Google Cloud Platform, and so much more. What would you like to learn?
        </div>
        <p>View all courses </p>
        <img src={library} />
<div>

  <div>
  <div>
    <img src={amazon}/>
    <h1>Amazon Web Services</h1>
    <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
    <p>Access all AWS Certification Courses</p>
    <p>Hundreds of hours of certification & courses</p>
    <p>Thousands of quiz questions</p>
    <div>Browse AWS courses</div>
  </div>
  <div>
    <img src={amazon}/>
    <h1>Amazon Web Services</h1>
    <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
    <p>Access all AWS Certification Courses</p>
    <p>Hundreds of hours of certification & courses</p>
    <p>Thousands of quiz questions</p>
    <div>Browse AWS courses</div>
  </div>
  </div>
  <div>
  <div>
    <img src={amazon}/>
    <h1>Amazon Web Services</h1>
    <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
    <p>Access all AWS Certification Courses</p>
    <p>Hundreds of hours of certification & courses</p>
    <p>Thousands of quiz questions</p>
    <div>Browse AWS courses</div>
  </div>
  <div>
  </div>
  
    <img src={amazon}/>
    <h1>Amazon Web Services</h1>
    <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
    <p>Access all AWS Certification Courses</p>
    <p>Hundreds of hours of certification & courses</p>
    <p>Thousands of quiz questions</p>
    <div>Browse AWS courses</div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Section3;
