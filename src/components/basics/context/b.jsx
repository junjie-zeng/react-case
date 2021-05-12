import React, { Component } from 'react'
import C from './c'
export default class B extends Component {
    render() {
        return (
            <div className="b">
                <h3>我是B组件</h3>
                <C />
            </div>
        )
    }
}
