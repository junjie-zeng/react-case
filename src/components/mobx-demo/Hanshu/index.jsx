import React from 'react'

import { useObserver, useLocalStore, observer, inject } from 'mobx-react'
// 直接使用
import state from '../index.state'

const Index = (props) => {

    const localStore = useLocalStore(() => state);
    const { todosLength, todos, addTodo, deleteTod } = localStore

    console.log('函数式组件 ...', localStore)


    return useObserver(() => (
            <div>
                <h5>函数组件(state直接使用)</h5>
                <button onClick={() => addTodo()}>增加一条(当前{todosLength}条)</button>
                <br />
                <ul>
                    {todos.map((item, index) => <li key={index}>* {item.name}<button onClick={() => deleteTod(index)}>删除</button></li>)}
                </ul>
            </div>
        )
    )
}


export default Index














