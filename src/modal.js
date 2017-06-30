import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        const classNames = option.length === 2 ? 'modal-button double' : 'modal-button';
        return (
                <div className="modal">
                    { title && <div className="modal-title">{ title }</div> }
                    { message && <div className="modal-inner" dangerouslySetInnerHTML={{ __html: message }} ></div> }
                    <div className="modal-buttons">
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
        );
    };
}
