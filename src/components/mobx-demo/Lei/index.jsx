import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'

// @inject('mobxState')
@observer
class index extends Component {

    

    render() {
        const { mobxState } = this.props
        console.log("类...",this.props)
        // console.log("mobxState...",mobxState)
        // console.log(mobxState)
        return (
            <div >
                <h5>类组件（props用法）</h5>
                <button onClick={()=>mobxState.addTodo()}>增加一条(当前{mobxState.todosLength}条)</button>
                <br />
                <ul style = {{padding:'10px'}}> 
                    {mobxState.todos.map((item, index) => <li key={index}>* {item.name} <button onClick = {()=>mobxState.deleteTod(index)}>删除</button></li>)}
                </ul>
            </div>
        )
    }
}

export default index