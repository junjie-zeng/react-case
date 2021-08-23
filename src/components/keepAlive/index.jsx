
import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from "react-router-dom"
import keepAliveHoc from "./keepAliveHoc"

/**
 * 
 * 组件缓存案例
 */



// 组件1 
class a extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [1, 2, 3, 4]
        }
    }


    handleAdd = () => {
        this.setState({
            list: [...this.state.list, Date.now()]
        })
    }


    render() {
        return (
            <>
                <h5>组件1（点添加，跳转路由再回来，添加的数据任然存在）</h5>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <div key={index}>{item}</div>
                        )
                    }
                </ul>
                <button onClick={this.handleAdd}>添加</button>
            </>
        )
    }
}

// 组件2
class b extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'hello word'
        }
    }

    render() {
        return (
            <>
                <h5>组件2</h5>
                <div>{this.state.title}</div>
            </>
        )
    }
}

// 将组件用高阶组件包起来
const A = keepAliveHoc(a)
const B = keepAliveHoc(b)

// 不使用高阶组件
// const A = a
// const B = b

// 根页面
const Index = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h3>React 组件缓存案例</h3>
            <div>
                <ul>
                    <li><Link to="/keepAlive/com1">组件1</Link></li>
                    <li><Link to="/keepAlive/com2">组件2</Link></li>
                </ul>
                <hr />
                <div>
                    <Switch>
                        <Route path="/keepAlive/com1" component={A}></Route>
                        <Route path="/keepAlive/com2" component={B}></Route>
                        <Redirect to="/keepAlive/com1" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Index