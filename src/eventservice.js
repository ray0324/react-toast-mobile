import { SHOW_LOADING, HIDE_LOADING, SHOW_CONFIRM, SHOW_ALERT, SHOW_NOTICE, CLEAR } from './constants';

class EventService {
    constructor() {
        this.registry = {};
    }
    // 绑定事件
    on(key, callback) {
        if(typeof this.registry[key] === 'undefined') {
            this.registry[key] = [];
        }
        this.registry[key].push(callback);
    }
    // 解除事件绑定
    off(key, callback) {
        if(typeof this.registry[key] === 'undefined') {
            return;
        }
        let queue = this.registry[key];
        let i = queue.length;
        while(i--) {
            if (queue[i] === callback) {
                queue.splice(i, 1);
            }
        }
    }
    // 触发事件
    emit(key, args) {
        if (typeof this.registry[key] === 'undefined') {
            return;
        }
        let queue = this.registry[key];
        for (let i = 0, l = queue.length; i < l; i++) {
            queue[i].call(null, args);
        }
    }
}

export const E = new EventService();

export const T = {
    loading: () => E.emit(SHOW_LOADING),
    loaded: () => E.emit(HIDE_LOADING),
    confirm: args => E.emit(SHOW_CONFIRM, args),
    alert: args => E.emit(SHOW_ALERT, args),
    notify: (...args) => E.emit(SHOW_NOTICE, args),
    clear: () => E.emit(CLEAR)
};
