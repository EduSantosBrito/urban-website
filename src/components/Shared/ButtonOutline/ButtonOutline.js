import React, { Component } from 'react';
import './ButtonOutline.css';
export default class ButtonOutline extends Component {
  render() {
    return (
      <a className="button-outline" href="www.google.com">
        {this.props.buttonText}
      </a>
    );
  }
}
