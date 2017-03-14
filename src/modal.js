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
        const { title, message, option, close } = this.props;
        const len = option.length;
        const classNames = len === 2 ? 'toast-btn-item left-right' : 'toast-btn-item top-bottom';
        return (
                <div className="toast-window">
                    { title && <div className="toast-window-head">{ title }</div> }
                    { message && <div className="toast-window-body" dangerouslySetInnerHTML={{ __html: message }} ></div> }
                    <div className="toast-window-foot">
                        <div className="toast-btn-group">
                            {
                                option.map(
                                    (item, i) => <div key={i} className={ classNames } onClick={ () => {
                                        item.fn && item.fn();
                                        close(this.props.id);
                                    } }>
                                        {item.text}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
        );
    };
}
