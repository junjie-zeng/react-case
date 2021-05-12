
import React, { Component } from 'react'

// 引入上下文 ，用于接收
import MyContext from './index.context'


class C1 extends Component {
    static contextType = MyContext
    render() {
        // console.log('c ....', this.context)
        const { username } = this.context
        return (
            <div className="c">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名:{username}</h4>
            </div>
        )
    }
}


// 函数式组件使用content【Consumer兼容类组件与函数式组件】
const C2 = () => {
    return (
        <MyContext.Consumer>
            {value => {
                // console.log('函数式组件 ...',value)
                return (
                    <div className="c">
                        <h3>我是C组件</h3>
                        <h4>我从A组件接收到的用户名:{value.username}</h4>
                    </div>
                )
            }}
        </MyContext.Consumer>
    )
}


// export default C1
export default C2