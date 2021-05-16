import React from 'react'

import { useObserver, useLocalStore, observer, inject } from 'mobx-react'
// 直接使用
import state from '../index.state'

const Index = (props) => {

    /**
     * 
     *  方式一
     */

    // const localStore = useLocalStore(() => state);
    // const { todosLength, todos, addTodo, deleteTod, updateTodoName, claerTodo } = localStore

    // console.log('函数式组件 ...', localStore)

    // return useObserver(() => (
    //     <div>
    //         <h5>函数组件(state直接使用) useObserver</h5>
    //         <h5>注：清空操作不同步</h5>
    //         <button onClick={() => addTodo()}>增加一条(当前{todosLength}条)</button>
    //         <button onClick={() => claerTodo()}>清空Todos</button>
    //         <br />
    //         <ul>
    //             {todos.map((item, index) => (

    //                 <li key={index}>
    //                     * {item.name}&nbsp;
    //                     <input type="text" onChange={(ev) => updateTodoName(index, ev.target.value)} />&nbsp;
    //                     <button onClick={() => deleteTod(index)}>删除</button></li>
    //             ))}
    //         </ul>
    //     </div>
    // )
    // )


    // 方式二
    const { addTodo, deleteTod, claerTodo, updateTodoName, todosLength, todos } = useObserver(() => (
        {
            addTodo: state.addTodo,
            todosLength: state.todosLength,
            todos: state.todos,
            deleteTod: state.deleteTod,
            claerTodo: state.claerTodo,
            updateTodoName: state.updateTodoName
        }
    ))


    return (
        <div>
            <h5>函数组件(state直接使用) useObserver</h5>
             <h5>注：修改操作不同步</h5>
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
            </ul>
        </div>
    )
}


export default Index














