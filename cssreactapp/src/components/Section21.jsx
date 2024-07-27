import React from "react";
import aws from "./images/aws-partner.svg";
import microsoft from "./images/microsoft-partner.svg";
import google from "./images/google-partner.svg";
import university from "./images/university-of-notre-dame.svg";
import cloud from "./images/cloud-health-technologies.svg";
import qualcomm from "./images/qualcomm.svg";
import capital from "./images/capital-one-dev-exchange.svg";
import women from "./images/women-who-code.svg";
import astronaut from "./images/cloud-astronaut.webp";
import fluency from "./images/cloud-fluency.webp";
import bigfoot from "./images/cloud-bigfoot.webp";
import engineer from "./images/icon-cloud-engineer.webp";
import knight from "./images/chess-knight.webp";
import telescope from "./images/telescope.webp";
import multi from "./images/multi-cloud.webp";
import books from "./images/books.webp";
import ashcraft from "./images/headshot-frank-ashcraft.webp";
import roi from "./images/icon-roi.webp";
import talent from "./images/icon-talent.webp";
import "./style/Section2.css";
const Section21 = () => {
  return (
    <div className="Section21">
      <h4 className="Trusted">Trusted by partners and customers</h4>
      <div className="aws">
        <img src={aws} />
        <img src={microsoft} />
        <img src={google} />
      </div>
      <div className="aws">
        <img src={women} />
        <img src={university} />
        <img src={cloud} />
        <img src={qualcomm} />
        <img src={capital} />
      </div>

      <div className="astronaut">
        <div className="Effective">
          <h1>Effective and engaging</h1>
          <p>
            We’ve helped more than 2.2 million engineers and 4,000+ businesses
            build modern tech skills and learn to cloud — and we’d love to help
            you, too.
          </p>
          <p>
            We use proven adult learning principles to create a tailored,
            effective learning experience for all skill levels. Only A Cloud
            Guru offers the freshest courses and labs, paired with comprehensive
            tools and presented by instructors every bit as unique as you are.
          </p>
          <div>
            Watch Video <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <img src={astronaut} />
      </div>

      <div className="astronaut">
        <img src={fluency} />
        <div className="Effective">
          <h1>Build organization-wide cloud fluency</h1>
          <p>
            Get teams across your org speaking the same language and ahead of
            the cloud curve with the most effective, hands-on, and comprehensive
            platform for cloud learning at scale.
          </p>
          <div>
            View plans <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <div className="astronaut">
        <div className="Effective">
          <h1>Build your cloud dream team and stop looking for Bigfoot</h1>
          <p>Cloud transformation takes skill — skilled talent.</p>
          <p>
            But 63% of IT leaders say it’s harder to find qualified engineers
            than Bigfoot. Unlike mythical upright-walking primates, there’s no
            doubt the right talent exists. But how do you find it? You already
            have.
          </p>
          <p>Source: Logicworks</p>
        </div>
        <img src={bigfoot} />
      </div>

      <div className="engineer">
        <div className="talent">
          <div className="roi">
            <img src={engineer} />
            <h1>50%</h1>
          </div>

          <p>
            of enterprise IT organizations’ migration to the cloud will be
            slowed by two years or more due to insufficient cloud skills
          </p>
          <p className="Source">Source: Gartner</p>
        </div>
        <div className="talent">
          <div className="roi">
            <img src={talent} />
            <h1>Only 21%</h1>
          </div>
          <p>
            of technologists feel completely confident they have the cloud
            skills to master their current job
          </p>
          <p className="Source">Source: State of Upskilling 2023</p>
        </div>
        <div className="talent">
          <div className="roi">
            <img src={roi} />
            <h1>2-6x ROI</h1>
          </div>
          <p>
            Cloud training initiatives can have a return on investment of up to
            2–6x
          </p>
          <p className="Source">Source: ACG: The ROI of Cloud Training</p>
        </div>
      </div>

      <div className="Continuous">
        <h3>Continuous cloud learning</h3>
        <h2>Your path to cloud nirvana</h2>
        <p>
          ACG for Business can navigate your team from here to the cloud with
          our fresh, hands-on approach to continuous
        </p>
        <p>
          {" "}
          learning at scale — and a boatload of tools built to teach your people
          better and faster.
        </p>
      </div>
      <div className="knight1">
        <div className="knight">
          <div>
            <img src={knight} />
            <h3>Accelerate cloud strategy</h3>
            <p>
              We integrate engaging content with hands-on learning-by-doing.
              Your people get real skills in real environments.
            </p>
          </div>
          <div>
            <img src={telescope} alt="" />
            <h3>Build cloud-ready talent</h3>
            <p>
              Build cloud-literate, cloud-ready, and cloud-native talent—with
              experiences built for every stage of cloud maturity
            </p>
          </div>
        </div>

        <div className="knight">
          <div>
            <img src={multi} alt="" />
            <h3>Tap into multi-cloud learning</h3>
            <p>
              Develop the modern tech skills needed to support any multicloud
              initiative, from building fluency to strategic migrations.
            </p>
          </div>

          <div>
            <img src={books} alt="" />
            <h3>Deliver personalized learning at scale</h3>
            <p>
              Learning tailored for every stage and style. Give your teams the
              information they need, when they need it.
            </p>
          </div>
          
        </div>
      </div>

      <div className="Don">
        <h1>Don't take it from us</h1>
        <p>Check out these real reviews from cloud learners:</p>
      </div>
      <div>
        <div className="ashcraft">

        <div className="Cloud">
        <img src={ashcraft} alt="" />
        <div>
          "A Cloud Guru’s Cloud Playground and Hands-on Labs made it easy for us
          to play around and learn in a protected environment where no one had
          to be worried about breaking something in our app or incurring
          unintentional costs."
        </div>
        <h4>Frank Ashcraft</h4>
        <p>Director of Software Engineering CloudChekr</p>
      </div>
      <div className="Cloud">
        <img src={ashcraft} alt="" />
        <div>
          "A Cloud Guru’s Cloud Playground and Hands-on Labs made it easy for us
          to play around and learn in a protected environment where no one had
          to be worried about breaking something in our app or incurring
          unintentional costs."
        </div>
        <h4>Frank Ashcraft</h4>
        <p>Director of Software Engineering CloudChekr</p>
      </div>
      <div className="Cloud">
        <img src={ashcraft} alt="" />
        <div>
          "A Cloud Guru’s Cloud Playground and Hands-on Labs made it easy for us
          to play around and learn in a protected environment where no one had
          to be worried about breaking something in our app or incurring
          unintentional costs."
        </div>
        <h4>Frank Ashcraft</h4>
        <p>Director of Software Engineering CloudChekr</p>
      </div>
        </div>
      
      </div>
     
    </div>
  );
};

export default Section21;
