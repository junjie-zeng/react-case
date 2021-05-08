import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class index extends Component {
    // 对接收的props进行限制
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = {
        mouse: false // 标识鼠标移入移出
    }

    // 鼠标移入移出
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 勾选，取消勾选
    handleCheck = (id) => {
        return (event) => {
            const { checked } = event.target
            this.props.updateTodo(id, checked)
        }
    }

    // 删除
    handleDelete = (id) =>{
        return()=>{
            if(window.confirm("确定删除吗")){
                console.log(id)
                this.props.deleteTodo(id)
            }
        }
        
        
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ background: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input checked={done} onChange={this.handleCheck(id)} type="checkbox" />
                    <span >{name}</span>
                </label>
                <button className="btn btn-danger" onClick = {this.handleDelete(id)} style={{ display: (mouse?'block':'none') }}>删除</button>
            </li>
        )
    }
}
