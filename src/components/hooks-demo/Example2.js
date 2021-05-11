import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
/*
    useEffect


    1. useEffect的第二个参数，它是一个数组，数组中可以写入状态对应的变量，用于监听这个状态。
        a. 如果不传递第二个参数，只要state发生了变化就会重新执行useEffect  ===> componentDidUpdate
        b. 如果传递的是一个空数组，则不会随着state的变化而重新执行useEffect  ===> componentDidMount
        c. 如果传递一个数组，并写入指定的状态，则只有该状态发生变化才会重新执行useEffect 
        d. 在useEffect中返回一个回调代表卸载 ===> componentWillUnmount


*/
// 类
class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log(`挂载, 初始为:${this.state.count}`)
    }

    componentDidUpdate() {
        console.log(`更新, 更新为：${this.state.count}`)
    }

    render() {
        return (
            <div>
                <p>你点击{this.state.count}次</p>
                <button onClick={this.addCount}>点我</button>
            </div>
        )
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

function Index() {
    useEffect(() => {
        console.log(`useEffect ... 进入Index页`)
        // 返回一个函数进行解绑
        return () => {
            console.log(`离开 Index `)
        }
    },[])
    return <h2>首页</h2>
}

function List() {
    useEffect(() => {
        console.log(`useEffect ... 进入List页`)
        // 返回一个函数进行解绑
        return () => {
            console.log(`离开 List `)
        }
    },[])
    return <h2>列表页</h2>
}



function _Example() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`挂载：初始为：${count}`)
        return()=>{
            console.log(`解绑：更新为：${count}`)
        }
    },[count])

    return (
        <div>
            <p>你点击{count}次</p>
            <button onClick={() => { setCount(count + 1) }}>点我</button>
            <Router>
                <ul>
                    <li ><Link to="/">首页</Link></li>
                    <li ><Link to="/list">列表页</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list" exact component={List}></Route>
            </Router>
        </div>
    )
}


export default _Example