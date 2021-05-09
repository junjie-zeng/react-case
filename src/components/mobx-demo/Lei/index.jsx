import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'

// @inject('mobxState')
@observer
class index extends Component {

    handleAdd = () => {
        // console.log(this.props)
        this.props.mobxState.addTodo()
    }

    render() {
        const { mobxState } = this.props
        // console.log(this.props)
        // console.log(mobxState)
        return (
            <div >
                <h5>类组件</h5>
                <button onClick={this.handleAdd}>增加一条</button>
                <br />
                <ul>
                    {mobxState.todos.map((item, index) => <li key={index}>* {item.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default index