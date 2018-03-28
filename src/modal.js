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
      <div className="overlay overlay-modal" onTouchMove={e => e.preventDefault()}>
        <div className="modal">
          <div className="modal-content-wrap">
            {title && <div className="modal-title">{title}</div>}
            {message && <div className="modal-inner" dangerouslySetInnerHTML={{ __html: message }} ></div>}
          </div>
          <div className="modal-button-wrap">
            {
              option.map(
                (item, i) => <div key={i} className={classNames} onClick={() => {
                  item.fn && item.fn();
                  close(this.props.id);
                }}>
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
