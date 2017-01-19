import React, { Component, PropTypes } from 'react';

export default class Progress extends Component {

    static propTypes = {
        duration: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { percent: 100 };
        this.intervalId = null;
    }

    componentDidMount() {
        const distance = 100 / (this.props.duration / 10);
        this.intervalId = setInterval(() => {
            const percent = this.state.percent - distance;
            this.setState({ percent: percent > 0 ? percent : 0 });
        }, 10);
    }

    componentDidUpdate() {
        if (this.state.percent <= 0 && this.intervalId) {
            clearTimeout(this.intervalId);
        }
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
    }

    render() {
        const { percent } = this.state;
        return (
            <div className="progressbar-container">
                <div className="progressbar-progress" style={{ width: `${percent}%` }}></div>
            </div>
        );
    }
}
