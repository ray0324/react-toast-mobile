# react-toast

## 简单的react弹窗组件
可以在react\react-redux项目中使用

##使用方法

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

// 确认
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

```
