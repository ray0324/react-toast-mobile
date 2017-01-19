import React, { Component, PropTypes } from 'react';

export default class Loading extends Component {
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
            <div className="loader">
                <div className="cui-grayload-text">
                    <div className="g-m--c"></div>
                    <div className="g-m--l"></div>
                    <div className="cui-grayload-bfont"> 加载中... </div>
                </div>
            </div>
        );
    };
}
