# [react-toast-mobile](https://github.com/ray0324/react-toast-mobile)

[![npm](https://img.shields.io/npm/v/react-toast-mobile.svg?style=flat-square)](https://www.npmjs.com/package/react-toast-mobile)

A simple overlay tips component for `react` or `react-redux` project.

## DEMO

[Click to see Demo](https://ray0324.github.io/react-toast-mobile/examples/)

## Usage

### 1. Import the module and css files where in use.

```
import Toast , { T } from 'react-toast-mobile';
import 'react-toast-mobile/lib/react-toast-mobile.css';

// other code...

ReactDOM.render(
    <div>
        <Toast />
        <OtherComponent />
    </div>
  , document.querySelector('.root'));

```

### 2. Import the `T` object when we want to show messages.

```
import { T } from 'react-toast-mobile';

// alerts whith single text msg
T.alert('hello world');

// alerts with a object
T.alert({
    title: 'React toast mobile',
    message: 'This is details for hello world his is details for hello world',
    text: 'ok',
    fn: () => console.log('ok')
});

// support multiple buttons and multiple callbacks.
T.confirm({
    title: 'Title',
    message: 'This is a message from react-toast-mobile.',
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

// loading
T.loading()

// loaded
T.loaded()

// notify
T.notify('hello toast')

```

## Notice

When use this package in old brownsers  you should import the `babe-polyfill` or `babe-transform-runtime` to polyfill.
