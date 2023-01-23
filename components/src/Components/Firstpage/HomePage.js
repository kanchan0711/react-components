import React from "react";
import "./index.css";
import intelLogo from "../../assets/intelLogo.avif"
import amazoneLogo from "../../assets/amazonLogo.avif"
import behanceLogo from "../../assets/behanceLogo.avif"
import facebookLogo from "../../assets/facebookLogo.avif"
import slackLogo from "../../assets/slackLogo.avif"
import ibmLogo from "../../assets/ibmLogo.avif"


const FirstPage = () => {
  return (
    <div className="main-caintainer ">
      <div className="container ">
        <div className="row">
          <div className="col-4">
          <div className="hexagon pt-5">beehee hive</div>
          </div>
          <div className="col-8">

            <div className="box-rigth pt-5">
            <div className="row">
              <div className="col-4">
                <h2>100%</h2>
                <p>SaaS technology</p>
              </div>
              <div className="col-4">
                 <h2>100+</h2>
               <p>Threat intel sources</p>
              </div>
              <div className="col-4">
                <h2>100+</h2>
               <p>Threat intel sources</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-4">
                <h2>100%</h2>
                <p>SaaS technology</p>
              </div>
              <div className="col-4">
                <h2>1,400+</h2>
          <p>Buit in queries</p>
              </div>
              <div className="col-4">
                 <h2>200+</h2>
                 <p>Costomer</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="footer-box mt-5">
        <div className="row">
          <div className="col-2">
            <img src={intelLogo}/>
          </div>
          <div className="col-2">
            <img src={amazoneLogo}/>
          </div>
          <div className="col-2">
            <img src={behanceLogo}/>
          </div>
          <div className="col-2">
            <img src={facebookLogo}/>
          </div>
          <div className="col-2">
            <img src={slackLogo}/>
          </div>
          <div className="col-2">
            <img src={ibmLogo}/>
          </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FirstPage;