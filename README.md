# [react-toast](https://github.com/ray0324/react-toast)

 简单的react弹窗组件可以在react\react-redux移动项目中使用

## DEMO

[https://ray0324.github.io/react-toast/examlpes/](https://ray0324.github.io/react-toast/examlpes/)

## 使用方法

### 1. 在项目的根组件中导入组件

```
import Toast from './components/toast';
// ... other code...

ReactDOM.render(
    <div>
        <Toast />
        <OtherComponent />
    </div>
  , document.querySelector('.root'));

```

### 2. 在要使用的地方导入使用

```
import { T } from './components/toast';

// 弹窗
T.alert('hello world');

// 定制的弹窗
T.alert({
    title: 'hello world',
    message: 'This is details for hello world his is details for hello world',
    text: '好的',
    fn: () => console.log('好的')
});

// 确认按钮数量支持一个或多个
T.confirm({
    title: '标题',
    message: '消息',
    option: [{
        text: 'btn1',
        fn: () => {
            alert('btn1');
        }
    }, {
        text: 'btn2',
        fn: () => alert('btn2')
    }, {
        text: 'btn3',
        fn: () => alert('btn3')
    }, {
        text: 'btn4',
        fn: () => alert('btn4')
    }]
});

// 加载中
T.loading()

// 加载完毕
T.loaded()

T.notify('hello toast')

```

**注意:** 在构建npm包的时候为了尽可能缩小包体积，未引入babe-transform-runtime或者
babe-polyfill包,在使用的时候需要注意引入或者做相应的低版本兼容处理
