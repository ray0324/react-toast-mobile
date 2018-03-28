import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Indicator extends Component {
  static propTypes = {
    status: PropTypes.bool,
    msg: PropTypes.string
  }
  static defaultProps = {
    status: true,
    msg: ''
  }
  render() {
    const { msg } = this.props;
    const cls = `indicator `+ (this.props.type || 'black');
    return (
      <div className="overlay overlay-indicator">
        <div className={cls}>
          <i className="spinner"></i>
          { msg && <span className="msg">{msg}</span> }
        </div>
      </div>
    );
  };
}
