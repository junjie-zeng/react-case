import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'

// @inject('mobxState')
@observer
class index extends Component {



    render() {
        const { mobxState } = this.props
        console.log("类...", this.props)
        // console.log("mobxState...",mobxState)
        // console.log(mobxState)

        console.log('toJS ...', toJS({ name: 'lhaha' }))


        return (
            <div >
                <h5>类组件（props用法）</h5>
                <button onClick={() => mobxState.addTodo()}>增加一条(当前{mobxState.todosLength}条)</button>
                <button onClick={() => mobxState.claerTodo()}>清空Todos</button>

                <br />
                <ul style={{ padding: '10px' }}>
                    {mobxState.todos.map((item, index) => (
                        <li key={index}>
                            * {item.name}&nbsp;
                            <input type="text" onChange={(ev) => mobxState.updateTodoName(index, ev.target.value)} />&nbsp;
                            <button onClick={() => mobxState.deleteTod(index)}>删除</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default index