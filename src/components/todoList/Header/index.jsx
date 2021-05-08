import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

export default class index extends Component {
    // 对接收的props进行类型限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        // 判断是否是回车键
        if (keyCode !== 13) return
        if (!target.value.trim()) {
            alert('不能为空')
            return
        }
        // 准备一个todoObj
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
