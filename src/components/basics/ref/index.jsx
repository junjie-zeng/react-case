import React, { Component } from 'react'

export default class index extends Component {

    btn3 = React.createRef() // createRef可以返回一个容器，该容器可以存储被ref所标识的节点

   
    // 字符串形式
    handleStringForm = () => {
        console.log(this)
        const { btn1 } = this.refs
        console.log('通过字符串形式 ref 获取的',btn1)
    }

    // 回调形式
    handleCallbackForm = ()=>{
        console.log(this)
        const { btn2 } = this
        console.log('通过回调形式 ref 获取的',btn2)
    }

    // createRef 形式
    handleCreareRefForm = ()=>{
        console.log(this)
        const { btn3 } = this
        console.log('通过createRef形式 ref 获取的',btn3.current)
    }

    render() {
        return (
            <div>
                <h5>Ref的三种形式</h5>
                <button ref="btn1" onClick={this.handleStringForm}>字符串形式 Ref</button>
                <button ref={c =>this.btn2 = c} onClick={this.handleCallbackForm}>回调形式 Ref</button>
                <button ref={this.btn3} onClick={this.handleCreareRefForm}>CreareRef Ref</button>
            </div>
        )
    }
}
