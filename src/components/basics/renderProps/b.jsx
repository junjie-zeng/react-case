import React, { Component } from 'react'

export default class b extends Component {
    render() {
        // console.log('render props b ...',this.props)
        return (
            <div className= "b">
                <h5>我是组件B</h5>
                <p>我接收到了A中的数据：{this.props.name}</p>
            </div>
        )
    }
}
