import React, { Component } from 'react';
import './CallToAction.css';
import ButtonOutline from '../../../Shared/ButtonOutline/ButtonOutline';

export default class CallToAction extends Component {
  render() {
    return (
      <div className="call-to-action">
        <h1 className="title">Be the future. Be Urban.</h1>
        <h2 className="subtitle">The best solution in web design</h2>
        <ButtonOutline buttonText="Get in Touch" />
      </div>
    );
  }
}
