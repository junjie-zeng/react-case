import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class index extends Component {
    // 对接收的props进行限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone:PropTypes.func.isRequired
    }

    // 全选/全不选
    handleCheckAll = (event) => {
        const { checked } = event.target
        this.props.checkAllTodo(checked)
    }

    // 清除所有已完成
    handleClear = ()=>{
        this.props.clearAllDone()
    }


    render() {
        const { todos } = this.props
        // 总数
        const total = todos.length
        // 已完成
        const doneCount = todos.reduce((pre, todo) => (pre + (todo.done ? 1 : 0)), 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0} onChange={(event) => this.handleCheckAll(event)} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick = {this.handleClear}>清除已完成任务</button>
            </div>
        )
    }
}
