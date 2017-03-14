import React, { Component, PropTypes } from 'react';

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
            <div>
                <div className="preloader-indicator-overlay"></div>
                <div className="preloader-indicator-modal">
                    <span className="preloader preloader-white"></span>
                </div>
            </div>
        );
    };
}
