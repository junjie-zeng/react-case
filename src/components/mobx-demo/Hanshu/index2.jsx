import React from 'react'

import { observer } from 'mobx-react'
// 直接使用
import state from '../index.state'

const Index = (props) => {

    const { todosLength, addTodo, todos, deleteTod, claerTodo, updateTodoName } = state
    return (
        <div>
            <h5>函数组件(state直接使用) observer</h5>
            <button onClick={() => addTodo()}>增加一条(当前{todosLength}条)</button>
            <button onClick={() => claerTodo()}>清空Todos</button>
            <br />
            <ul style={{ padding: '10px' }}>
                {todos.map((item, index) => (
                    <li key={index}>
                        * {item.name}&nbsp;
                        <input type="text" onChange={(ev) => updateTodoName(index, ev.target.value)} />&nbsp;
                        <button onClick={() => deleteTod(index)}>删除</button>
                    </li>
                ))}
                {/* <li key={index}>* {item.name}<button onClick={() => deleteTod(index)}>删除</button></li>)} */}
            </ul>
        </div>
    )
}


export default observer(Index)














