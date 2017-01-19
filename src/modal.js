import React, { Component, PropTypes } from 'react';

export default class Modal extends Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        option: PropTypes.array
    }

    static defaultProps = {
        option: []
    }

    render() {
        const { title, message, option, closefn } = this.props;
        const len = option.length;
        return (
            <div className="toast-window">
                { title && <div className="toast-window-hd">{ title }</div> }
                <div className="toast-window-bd" dangerouslySetInnerHTML={{ __html: message }} ></div>
                <div className="toast-window-ft">
                    <div className="toast-btn-group">
                        {
                            option && option.map( (item, i) => <div key={i} className={ len === 2 ? 'toast-btn-item left-right' : 'toast-btn-item top-bottom' } onClick={ () => {
                                item.fn && item.fn();
                                closefn(this.props.id);
                            }}>{item.text}</div>)
                        }
                    </div>
                </div>
            </div>
        );
    };
}
