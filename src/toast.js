import React, { Component } from 'react';
import { SHOW_LOADING, HIDE_LOADING, SHOW_CONFIRM, SHOW_ALERT, SHOW_NOTICE, CLEAR, TEXT } from './constants';
import { E } from './eventservice';
import Loading from './loading';
import Modal from './modal';

function guid() {
    const r = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return r() + r() + r() + '-' + r() + '_' + r() + '-' + r() + '_' + r() + r() + r();
}
export default class Toast extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            modals: []
        };
    }

    componentDidMount() {
        // 加载loading
        E.on(SHOW_LOADING, () => {
            this.setState({ loading: true });
        });

        // 关闭loading
        E.on(HIDE_LOADING, () => {
            this.setState({ loading: false });
        });

        E.on(SHOW_ALERT, args => {
            let modals = this.state.modals;
            // 对象形式
            // 对应的调用方式为
            // T.alert({
            //     title: 'hello world',
            //     message: 'This is details for hello world his is details for hello world',
            //     text: 'ok',
            //     fn: () => console.log('ok')
            // });
            if(typeof args === 'object') {
                modals.push({
                    id: guid(),
                    title: args.title,
                    message: args.message,
                    option: [{
                        text: args.text || TEXT[0],
                        fn: () => args.fn && args.fn()
                    }]
                });
            } else {
                // 普通形式
                // 对应的调用方式为
                // T.alert('hello world')
                modals.push({
                    id: guid(),
                    title: '',
                    message: args,
                    option: [{
                        text: TEXT[0]
                    }]
                });
            }
            this.setState({
                loading: false,
                modals
            });
        });

        E.on(SHOW_CONFIRM, args => {
            let modals = this.state.modals;
            // 为每组数据添加一个guid
            args.id = guid();
            modals.push(args);
            this.setState({
                loading: false,
                modals
            });
        });

        E.on(CLEAR, () => this.setState({
            loading: false,
            modals: []
        }));
    };

    componentWillUnmount() {
        // 解绑事件
        E.off(SHOW_LOADING);
        E.off(SHOW_CONFIRM);
        E.off(SHOW_ALERT);
        E.off(SHOW_NOTICE);
        E.off(CLEAR);
    }

    // 关闭指定的弹窗
    close(id) {
        let modals = this.state.modals.filter(item => item.id !== id);
        this.setState({ modals });
    }

    _renderLoading() {
        return <div className="toast-root"><Loading/></div>;
    }

    _renderConfirm() {
        let modals = this.state.modals;
        let item = modals[0];
        if(!item) {
            console.log(null);
            return null;
        }
        return (
            <div className="toast-root">
                <Modal
                    id={item.id}
                    title={item.title}
                    message={item.message}
                    option={item.option}
                    closefn={this.close.bind(this)}
                 />
            </div>
        );
    }

    render() {
        if(!this.state) {
            return <div className="toast-root">1</div>;
        }
        console.log(this.state);
        return this._renderConfirm();
        // if(this.state.loading) {
        //     return this._renderLoading();
        // }

        // switch(this.state.type) {
        // case SHOW_LOADING:
        //     return this._renderLoading();
        // case SHOW_CONFIRM:
        //     return this._renderConfirm();
        // }
        return null;
    }
}
