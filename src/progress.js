import React, { Component, PropTypes } from 'react';

export default class Progress extends Component {
    static propTypes = {
        percent: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
    }

    render() {
        const { percent } = this.props;
        return (
            <div className="progress-bar">
                <div className="desc-text" >
                    {/* <span className="l">上传进度</span> */}
                    <span className="r">{`${percent}%`}</span>
                </div>
                <div className="progress-wrap" >
                    <div className="progress" style={{ width: `${percent}%` }}></div>
                </div>
            </div>
        );
    }
}
