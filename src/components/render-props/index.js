

import React from 'react'

import Mouse from './Mouse'

/*
    “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术

     render prop 是一个用于告知组件需要渲染什么内容的函数 prop。

*/


class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse
        // console.log(mouse)
        return (

            <div style={{ width: '100px', height: '100px', background: 'pink', position: 'absolute', left: mouse.x, top: mouse.y }}>
                跟随鼠标移动
            </div>
        )
    }
}

class RenderProp extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <h1>render-props</h1>

                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />

            </div>
        )
    }
}

export default RenderProp