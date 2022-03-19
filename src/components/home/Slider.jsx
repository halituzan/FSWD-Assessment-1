import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <Carousel variant="dark" className="container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/slide-1.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="wrapSliderSlogan">
            <h1>SELL SMARTER SELL FASTER</h1>
            <span className="fs-1">Grow your business with inbound marketing and sales enablement. </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/slide-2.jpg"}
            alt="Second slide"
          />
          <Carousel.Caption>
          <div className="wrapSliderSlogan">
          <h1>THE PROBLEMS WE SOLVE</h1>
            <span className="fs-1">Businesses typically hire us because they... want their salespeople to work smarter and faster. </span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/slide-3.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className="wrapSliderSlogan">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
