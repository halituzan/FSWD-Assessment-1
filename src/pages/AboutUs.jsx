import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../components/about/About'
export class AboutUs extends Component {
  render() {
    return (
      <div className=''>
        <About/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)