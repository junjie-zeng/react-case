import React, { Component } from 'react'

export default class index extends Component {
    state = {
        count: 0
    }

    // 对象式更改
    handleCount1 = () => {
        console.log('setState before ...', this.state.count)
        this.setState({ 
            count: ++ this.state.count
        },()=>{
            console.log("callback ...",this.state.count)
        })

        console.log('setState after ...', this.state.count)
    }

    // 函数式更改
    handleCount2 = () => {
        this.setState(state=>({count:++state.count}),()=>{
            console.log("callback ...",this.state.count)
        })
    }


    render() {
        return (
            <div>
                <h5>setSate的两种形式</h5>
                <h4>当前count {this.state.count}</h4>
                <button onClick={this.handleCount1}>方式一：直接更改</button>
                <button onClick={this.handleCount2}>方式二：函数更改</button>
            </div>
        )
    }
}
