import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import * as TYPES from './types';
import { E } from './eventservice';
import Preloader from './preloader';
import Modal from './modal';
// import Progress from './progress';
import Notice from './notice';

// 生成GUID字符串
function guid() {
    const r = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return r() + r() + '-' + r() + '-' + r() + '-' + r() + '-' + r() + r() + r();
}

export default class Toast extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,  // loading 状态
            notices: [],
            progress: {
                txt: '',
                percent: 0,
                show: false
            },
            modals: []
        };
    }

    componentDidMount() {
        // 加载loading
        E.on(TYPES.SHOW_LOADING, () => {
            this.setState({ loading: true });
        });

        // 关闭loading
        E.on(TYPES.HIDE_LOADING, () => {
            this.setState({ loading: false });
        });

        // 打开alert
        E.on(TYPES.SHOW_ALERT, args => {
            let modals = this.state.modals;
            // 对象形式
            // T.alert({title:'hello world',message:'',text: 'ok',fn:okFn})
            if(typeof args === 'object') {
                modals.push({
                    id: guid(),
                    title: args.title,
                    message: args.message,
                    option: [{
                        text: args.text || TYPES.TEXT[0],
                        fn: args.fn
                    }]
                });
            } else {
                // 普通形式
                // T.alert('hello world')
                modals.push({
                    id: guid(),
                    title: '',
                    message: args,
                    option: [{
                        text: TYPES.TEXT[0]
                    }]
                });
            }
            this.setState({ loading: false, modals });
        });

        E.on(TYPES.SHOW_CONFIRM, args => {
            let modals = this.state.modals;
            // 为每组数据添加一个guid
            args.id = guid();
            modals.push(args);
            this.setState({ loading: false, modals });
        });

        E.on(TYPES.SHOW_NOTICE, args => {
            let notices = this.state.notices;
            // 为每组数据添加一个guid
            notices.push({
                id: guid(),
                duration: 2000,
                message: args
            });
            this.setState({ loading: false, notices });
        });

        E.on(TYPES.CLEAR, () => this.setState({
            loading: false,
            modals: []
        }));
    };

    componentWillUnmount() {
        // 解绑事件
        E.clearAllEvents();
    }

    // 关闭指定的弹窗
    closeModal(id) {
        let modals = this.state.modals.filter(item => item.id !== id);
        this.setState({ modals });
    }

    // 关闭指定的小提示
    closeNotice(id) {
        let notices = this.state.notices.filter(item => item.id !== id);
        console.log();
        this.setState({ notices });
    }

    _render() {

        if(this.state.modals.length > 0) {
            let item = this.state.modals[0];
            return (
                <div>
                    <div className="overlay" onTouchMove={e=>e.preventDefault()}></div>
                    <Modal
                        id={item.id}
                        title={item.title}
                        message={item.message}
                        option={item.option}
                        close={this.closeModal.bind(this)}
                     />
                </div>
            )
        }

        if(this.state.notices.length > 0) {
            let item = this.state.notices[0];
            return (
                <div>
                    <div className="overlay" onTouchMove={e=>e.preventDefault()}></div>
                    <Notice
                        id={item.id}
                        close={this.closeNotice.bind(this)}
                        duration={item.duration}
                        message={item.message} />
                </div>
            )
        }

        if(this.state.loading) {
            return (
                <div>
                    <div className="overlay" onTouchMove={e=>e.preventDefault()}></div>
                    <Preloader/>
                </div>
            )
        }

        if(this.state.progress.show) {
            return (
                <div>
                    <div className="overlay" onTouchMove={e=>e.preventDefault()}></div>
                    <Progress percent={ this.state.progress.percent } />
                </div>
            )
        }
        return null;
    }

    render() {
        return (
            <CSSTransitionGroup
                className="toast-root"
                component="div"
                transitionName="toast-test"
                transitionAppear={false}
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
                transitionEnter={true}
                transitionLeave={true}>
                {this._render()}
            </CSSTransitionGroup>
        )
    }
}
