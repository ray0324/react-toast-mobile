import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Progress extends Component {
    static propTypes = {
        percent: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
        text: PropTypes.string
    }

    render() {
        let { text, percent } = this.props;
        percent = (percent*100).toFixed(1);
        return (
            <div className="overlay overlay-progress" onTouchMove={e=>e.preventDefault()}>
                <div className="progress-bar">
                    <div className="desc-text" >
                        <strong>{text}</strong>
                        <span>{`${percent}%`}</span>
                    </div>
                    <div className="progress-wrap" >
                        <div className="progress" style={{ width: `${percent}%` }}></div>
                    </div>
                </div>
            </div>
        );
    }
}
