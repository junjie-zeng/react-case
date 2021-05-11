import React, { Component } from 'react'
import { observer } from 'mobx-react'
import state from '../index.state'
@observer
export default class index extends Component {
    render() {
        return (
            <div >
                <h5>类组件（state直接使用）</h5>
                <button onClick={state.addTodo}>增加一条(当前{state.todosLength}条)</button>
                <br />
                <ul style = {{padding:'10px'}}> 
                    {state.todos.map((item, index) => <li key={index}>* {item.name} <button onClick = {()=>state.deleteTod(index)}>删除</button></li>)}
                </ul>
            </div>
        )
    }
}
