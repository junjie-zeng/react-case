import React, { Component } from 'react'

import Header from './Header/index'
import List from './List'
import Footer from './Footer'
import './index.css'

export default class index extends Component {

    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: false }
        ]
    }

    // 添加todo
    addTodo = (todoObj) => {
        // 获取状态中的todos
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    // 更新todo对象
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state
        // 匹配处理数据
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }

    // 删除todo
    deleteTodo = (id) => {
        // 获取状态中的todos
        const { todos } = this.state
        // 过滤不等于该ID的值
        const newTodos = todos.filter((item) => item.id !== id)
        this.setState({ todos: newTodos })
    }

    // 全选
    checkAllTodo = (done) => {
        // 获取状态中的todos
        const { todos } = this.state
        const newTodos = todos.map(todoObj => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos })
    }

    // 清除已完成
    clearAllDone = () => {
        // 获取状态中的todos
        const { todos } = this.state
        const newTodos = todos.filter(todoObj => !todoObj.done)
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className='todo_list_body'>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} todos={todos} />
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                    </div>
                </div>
            </div>

        )
    }
}
