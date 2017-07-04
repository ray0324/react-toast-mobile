import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import * as TYPES from './types';
import { E } from './EventService';
import Indicator from './Indicator';
import Modal from './Modal';
import Progress from './Progress';
import Notice from './Notice';

// 生成GUID字符串
function guid() {
    const r = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return r() + r() + '-' + r() + '-' + r() + '-' + r() + '-' + r() + r() + r();
}

export default class Toast extends Component {

    constructor() {
        super();
        this.state = {
            // loading 状态
            loading: {
                status:false,
                msg: ''
            },
            notices: [],
            // 模态框
            modals: [],
            // 进度
            progress: {
                text: '',
                percent: 0,
                status: false
            }
        };
    }

    componentDidMount() {
        // 加载loading
        E.on(TYPES.SHOW_LOADING, msg => {
            this.setState({
                loading: {
                    status: true,
                    msg
                }
            });
        });

        // 关闭loading
        E.on(TYPES.HIDE_LOADING, () => {
            this.setState({
                loading:{
                    status: false,
                    msg:''
                }
            });
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

        // 进度条开始
        E.on(TYPES.SHOW_PROGRESS, text => {
            this.setState({
                progress:{
                    status: true,
                    text: text,
                    percent: 0
                }
            });
        });

        // 设置进度条
        E.on(TYPES.SET_PROGRESS, param => {
            // 进度条100%提示
            if(typeof param === 'object'){
                this.setState({
                    progress:{
                        status: true,
                        text: param.text || this.state.progress.text,
                        percent: 1
                    }
                });
                return;
            }

            this.setState({
                progress:{
                    status: true,
                    text: this.state.progress.text,
                    percent: param
                }
            });
        });
        // 关闭进度条
        E.on(TYPES.HIDE_PROGRESS, () => {
            this.setState({
                progress: {
                    text: '',
                    percent: 0,
                    status: false
                }
            });
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
                <Modal
                    id={item.id}
                    title={item.title}
                    message={item.message}
                    option={item.option}
                    close={this.closeModal.bind(this)}
                 />
            )
        }

        if(this.state.notices.length > 0) {
            let item = this.state.notices[0];
            return (
                <Notice
                    id={item.id}
                    close={this.closeNotice.bind(this)}
                    duration={item.duration}
                    message={item.message} />
            )
        }

        if(this.state.loading.status) {
             return <Indicator {...this.state.loading} />
        }

        if(this.state.progress.status) {
            return (
                <Progress {...this.state.progress} />
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
                transitionLeaveTimeout={50}
                transitionEnter={true}
                transitionLeave={true}>
                {this._render()}
            </CSSTransitionGroup>
        )
    }
}
