import React, { Component } from 'react'
import B from './b'
// 引入上下文
import MyContext from './index.context'

export default class A extends Component {
    state = {
        username: 'haha'
    }

    render() {
        const { username } = this.state
        return (
            <div className="a">
                <h3>我是A组件</h3>
                <h4>我的用户名是:{username}</h4>
                <MyContext.Provider value = {this.state}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}
