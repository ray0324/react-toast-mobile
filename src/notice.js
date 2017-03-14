import React, { Component, PropTypes } from 'react';

export default class Notice extends Component {
    static propTypes = {
        id: PropTypes.string,
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        duration: PropTypes.number
    }

    componentDidMount() {
        console.log('componentDidMount:', this.props);
        setTimeout(()=>{
            this.props.close(this.props.id);
        }, this.props.duration);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.id === nextProps.id) {
            return false;
        }else{
            return true;
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('curProps:', this.props);
        console.log('componentWillUpdate:', nextProps);
        setTimeout(()=>{
            this.props.close(this.props.id);
        }, this.props.duration);
    }

    render() {
        return (
            <div className="notice">
                {this.props.message}
            </div>
        );
    };
}
