import React, { Component } from 'react'
import A from './a'
import B from './b'

import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className = "renderProps">
                <h5>Render Props</h5>
                {/* 方式一：通过组件标签体传入结构,有缺陷，如果组件B想要拿到组件A的数据，这样是行不通的 */}
                {/* <A>
                    <B />
                </A> */}

                {/* 方式二：通过组件标签属性传入结构 */}
                <A render = {(props)=><B {...props}/>}></A>
            </div>
        )
    }
}
