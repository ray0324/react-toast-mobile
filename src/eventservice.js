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
    loading: msg => E.emit(TYPES.SHOW_LOADING,msg),
    loaded: () => E.emit(TYPES.HIDE_LOADING),
    confirm: param => E.emit(TYPES.SHOW_CONFIRM, param),
    alert: param => E.emit(TYPES.SHOW_ALERT, param),
    notify: param => E.emit(TYPES.SHOW_NOTICE, param),
    progress: {
        start: text => E.emit(TYPES.SHOW_PROGRESS,text),
        set: param => E.emit(TYPES.SET_PROGRESS, param),
        done: (text) => {
            E.emit(TYPES.SET_PROGRESS, { text, progress:1 });
            setTimeout(()=>E.emit(TYPES.HIDE_PROGRESS),200)
        }
    },
    clear: () => E.emit(TYPES.CLEAR)
};
