import React, { Component } from 'react'
import A from './a'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className = "context">
                <h4>context （上下文）</h4>
                <A/>
            </div>
        )
    }
}
