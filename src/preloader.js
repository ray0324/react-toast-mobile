import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Preloader extends Component {
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
            <div className="preloader-indicator-modal">
                <span className="preloader preloader-white"></span>
            </div>
        );
    };
}
