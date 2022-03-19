import React, { Component } from "react";
import { connect } from "react-redux";
import HomeForm from "../components/home/HomeForm";
import Slider from "../components/home/Slider";

export class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <HomeForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
