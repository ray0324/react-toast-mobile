import * as TYPES from './types';

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

    //解除所有绑定
    clearAllEvents() {
        this.registry = {};
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
    loading: () => E.emit(TYPES.SHOW_LOADING),
    loaded: () => E.emit(TYPES.HIDE_LOADING),
    confirm: args => E.emit(TYPES.SHOW_CONFIRM, args),
    alert: args => E.emit(TYPES.SHOW_ALERT, args),
    notify: args => E.emit(TYPES.SHOW_NOTICE, args),
    progress: {
        start: () => E.emit(TYPES.SHOW_PROGRESS),
        set: progress => E.emit(TYPES.SET_PROGRESS, progress),
        done: () => E.emit(TYPES.HIDE_PROGRESS)
    },
    clear: () => E.emit(TYPES.CLEAR)
};
