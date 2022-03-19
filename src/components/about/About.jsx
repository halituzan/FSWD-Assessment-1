import React, { Component } from "react";
import "./aboutus.css";
export default class About extends Component {
  render() {
    return (
      <div className="aboutHead d-flex justify-content-center align-items-center">
        <div className="aboutCenter">
          <h1>WHO WE ARE</h1>
          <hr />
          <p>
            We're a sales performance agency. We've been helping businesses
            drive revenue with the use of inbound marketing and sales enablement
            tactics since 2012. We're a proud HubSpot Diamond Partner and pride
            ourselves on using the best tools to help our clients succeed. Our
            team is made up of smart and talented people that are passionate
            about creating inbound sales results!
          </p>
          <h2>WE'RE DIFFERENT THAN THE REST</h2>
          <hr />
          <p>
            We're rooted in sales. Our parent company, The Center for Sales
            Strategy (CSS), has been helping sales organizations turn talent
            into performance for almost 40 years. Unlike other marketing
            agencies, we're obsessed with ROI and we have the experience to
            deliver inbound sales results because we've done it ourselves...
          </p>
          <p>
            We've been where you are. More than a decade ago, when we needed to
            grow and diversify how we generated new business at CSS, we turned
            to inbound marketing and found huge success after launching our
            sales strategy blog. Once we mastered the art of using thought
            leadership content for lead generation, we launched LeadG2 so we
            could help businesses do the exact same thing.{" "}
          </p>
          <div className="buttonGroup d-flex justify-content-evenly mt-5">
            <button type="button" className="btn btn-dark">Our references</button>
            <button type="button" className="btn btn-dark">Contact us</button>
          </div>
        </div>
      </div>
    );
  }
}
