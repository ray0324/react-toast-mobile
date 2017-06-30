
import React from 'react';
import ReactDOM from 'react-dom';

import Toast , { T } from '../src/index';
window.T=T;

function App() {
    return (
        <div>
            <Toast />
            <h1>Hello  Toast Demo</h1>
            <button onClick={()=>{
                T.confirm({
                    title: '标题',
                    message: '消息',
                    option: [{
                        text: 'btn1',
                        fn: () => {
                            alert(124)
                        }
                    }, {
                        text: 'btn2',
                    }, {
                        text: 'btn3',
                    }, {
                        text: 'btn4',
                    }]
                });
            }}> confirm</button>
        </div>
    )
}

// setTimeout(T.loading,3000);

ReactDOM.render(<App />,document.getElementById('root'));
