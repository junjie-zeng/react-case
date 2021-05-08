import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

export default class index extends Component {
    // 对接收的props进行类型限制
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }



    render() {
        const { todos,updateTodo ,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => <Item key={todo.id} {...todo} deleteTodo = {deleteTodo} updateTodo={updateTodo} />)
                }

            </ul>
        )
    }
}
