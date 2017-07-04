
import React from 'react';
import ReactDOM from 'react-dom';
import Toast , { T } from '../src/index';

window.T=T;

const long_msg = `
    <div style="text-align:justify">

海水，顾名思义，威尼斯就是一个水城。以前对威尼斯没有什么特别强烈的感觉，对读书的时候读到的威尼斯已经没有了任何记忆。我们住在主岛，就在Mestre火车站旁边的民宿，房东人很好。我们会呆两天，所以买了一个48小时的travel pass，一天20欧，两天30欧。除了火车，bus和轮渡随便坐，刷一下卡就可以了。我们发现火车会快很多，所以我们都会选择花一块二坐火车抵达Venezia Santa Lucia 然后再搭乘轮渡去各个小岛。﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿
<br />
我们开车从佛罗伦萨抵达的时候已经傍晚了，所以我们决定直接去看看圣马可大教堂的黄昏与夜景。说实话，旅游前阅读攻略不可能给你把所有的事情都准备好，旅游的乐趣在于享受旅客的身份，把自己当成白痴勇于去问路人任何问题。﻿﻿﻿﻿
<br />
我发现这是一种很快捷的方式，但是不想问的也可以临时查阅攻略与谷歌，这些强大的网络资讯共享会提供你一切想知道的。﻿﻿﻿﻿
<br />
不得不承认，踏上轮渡的瞬间，我还是被眼前的景色所深深吸引了。以为看过了无数的海水，却止不住再次为这片海上乐土所动容。威尼斯的美，是具有冒险精神的。看着一座座长在水果的房子，我不得不担忧万一涨潮，海水就会涌入家里的场景。﻿﻿
    </div>
`

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
                        text: '点赞',
                        fn: () => {
                            alert('很赞')
                        }
                    }, {
                        text: '残忍拒绝',
                        fn: () => {
                            alert('太残忍')
                        }
                    }, {
                        text: '取消',
                    }]
                });
            }}> 确认多按钮(confirm)</button>

            <br/>
            <button onClick={()=>{
                T.confirm({
                    // title: '标题',-
                    message: long_msg,
                    option: [{
                        text: '确定',
                        fn: () => {
                            alert(124)
                        }
                    }, {
                        text: '取消',
                    }]
                });
            }}> 确认长消息(confirm)</button>
            <br/>

            <button onClick={()=>{
                T.loading('加载中')
                setTimeout(T.loaded,2000)
            }}>加载中(loading)</button>
            <br/>
            <button onClick={()=>{
                T.progress.start('视频上传中')
                let i = 0.1;
                let interval = setInterval(()=>{
                    i+=0.1*Math.random();
                    if (i>=1) {
                        clearInterval(interval);
                        i=1;
                        T.progress.done('上传完成!');
                        return;
                    };
                    T.progress.set(i)
                },200)

            }}>进度条(progress)</button>
            <br/>
            <button onClick={()=>{
                T.notify('密码错误')
                // setTimeout(T.loaded,2000)
            }}>提示(notify)</button>
            <br/>
        </div>
    )
}

// setTimeout(T.loading,3000);

ReactDOM.render(<App />,document.getElementById('root'));
