import React from "react";
import "./style/Section3.css";
import playground from "./images/cloud-playground.webp";
import practice from "./images/practice-exams.webp";
import labs from "./images/hands-on-labs.webp";
import library from "./images/cloud-learning-library .webp"
import amazon from "./images/amazon-web-services.webp"
import logo2 from "./images/cloug-guru-logo.svg";

const Section3 = () => {
  return (
    <div>
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
      <div className="subsection">
        <div className="Comprehensive">
          <div>
            <h4>This will teach you</h4>
            <h2>Comprehensive cloud learning library</h2>
            <div>With hundreds of courses and thousands of labs, we give you plenty of room to roam. Whether you’re accelerating your own career or skilling up teams, you can go as broad or as deep as you need, and then some.</div>
            <div>
              We offer full certification training and technical deep dives for Amazon Web Services, Microsoft Azure, Google Cloud Platform, and so much more. What would you like to learn?
            </div>
            <p>View all courses <i class="fa-solid fa-angle-right"></i> </p>
          </div>
          <img src={library} />
        </div>
        <div className="Amazon">
          <div className="Services">
            <div className="Advanced">
              <img src={amazon} />
              <h1>Amazon Web Services1</h1>
              <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
              <p>Access all AWS Certification Courses</p>
              <p>Hundreds of hours of certification & courses</p>
              <p>Thousands of quiz questions</p>
              <div>Browse AWS courses <i class="fa-solid fa-angle-right"></i></div>
            </div>
            <div className="Advanced">
              <img src={amazon} />
              <h1>Amazon Web Services2</h1>
              <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
              <p>Access all AWS Certification Courses</p>
              <p>Hundreds of hours of certification & courses</p>
              <p>Thousands of quiz questions</p>
              <div>Browse AWS courses <i class="fa-solid fa-angle-right"></i></div>
            </div>
      
        
            <div className="Advanced">
              <img src={amazon} />
              <h1>Amazon Web Services1</h1>
              <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
              <p>Access all AWS Certification Courses</p>
              <p>Hundreds of hours of certification & courses</p>
              <p>Thousands of quiz questions</p>
              <div>Browse AWS courses <i class="fa-solid fa-angle-right"></i></div>
            </div>
            <div className="Advanced">
              <img src={amazon} />
              <h1>Amazon Web Services2</h1>
              <h5>We're an AWS Advanced Consulting Partner, and have trained over two million engineers on AWS.</h5>
              <p>Access all AWS Certification Courses</p>
              <p>Hundreds of hours of certification & courses</p>
              <p>Thousands of quiz questions</p>
              <div>Browse AWS courses <i class="fa-solid fa-angle-right"></i></div>
            </div>
            </div>
        </div>
      </div>

      <div className="Plans">
        <img src={logo2} alt="Your SVG" className="logoimg2" />
        <h1>Plans & pricing
        </h1>

        <div className="Individualdiv">
          <div className="Individual">Individual</div>
          <div className="Team">Team</div>
        </div>

        <div className="Monthly">
          <p>Monthly   <i class="fa-solid fa-toggle-on"></i>  Yearly</p>
          <div className="Personal">
            <div className="Basic">
              <h1>Personal Basic</h1>
              <div>Fast-track certifications with hands-on learning</div>
              <h1>$35</h1>
              <p>per month</p>
              <div className="Plus">Start with Basic</div>
              <div className="start">Or start a <p className="FREE">FREE trial</p></div>
            </div>
            <div className="Basic">
                <h1>Personal Plus</h1>
                <div>Learn by doing in unlimited AWS, Azure & GCP Sandboxes</div>
                <h1>$47</h1>
                <p>per month</p>
                <div className="Plus">Start with Plus</div>
                <div className="start">Or start a <p className="FREE">FREE trial</p></div>

              </div>
          </div>
        </div>
        {/* <div>Compare Plans</div> */}
      </div>
    </div>

  );
};

export default Section3;
