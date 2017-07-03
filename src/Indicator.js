import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Indicator extends Component {
    static propTypes = {
        type: PropTypes.string,
        color: PropTypes.string
    }
    static defaultProps = {
        type: 'spin',
        color: '#f60'
    }
    render() {
        return (
            <div className="indicator">
                <i className="spinner white"></i>
                <span className="msg">加载中</span>
            </div>
        );
    };
}
