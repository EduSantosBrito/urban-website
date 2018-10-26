import React, { Component } from 'react';
import './HeaderContent.css';
import CallToAction from './CallToAction/CallToAction';

export default class HeaderContent extends Component {
  render() {
    return (
      <div className="header-content">
        <CallToAction />
        <img
          src={require('./header.svg')}
          className="image-bg"
          alt="Two guys, with parts of a browser, constructing it."
        />
      </div>
    );
  }
}
