import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notice extends Component {
  static propTypes = {
    id: PropTypes.string,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    duration: PropTypes.number
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.close(this.props.id);
    }, this.props.duration);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.id === nextProps.id) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUpdate(nextProps, nextState) {
    setTimeout(() => {
      this.props.close(this.props.id);
    }, this.props.duration);
  }

  render() {
    return (
      <div className="notive-wrap">
        <div className="notice">
          {this.props.message}
        </div>
      </div>
    );
  };
}
