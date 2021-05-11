import React, { Component } from 'react'
import { useState } from 'react'
/*

    useState
    
    useState 是react自带的一个hook函数，它的作用是用来声明状态变量。
        返回两个元素的数组：第一个元素为状态值，第二个元素为更改状态值的函数

*/
// 类
class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
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

// hooks
function _Example() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>你点击{count}次</p>
            <button onClick={() => setCount(count + 1)}>点我</button>
        </div>
    )
}

// hooks 多状态声明
function __Example() {
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('前端工程师')
    const [likes, setLikes] = useState(['苹果', '香蕉'])


    const addLikes = () => {
        let _likes = JSON.parse(JSON.stringify(likes))
        _likes.push('猕猴桃' + Date.now())
        setLikes(_likes)
        console.log(likes)
    }

    return (
        <div>
            <p>age:{age}</p>
            <p>sex:{sex}</p>
            <p>work:{work}</p>
            <p>likes:</p>
            <ul>
                {
                    likes.map((item, i) => <li key={i}>{item}</li>)
                }

            </ul>
            <button onClick={addLikes}>add likes</button>
        </div>
    )
}
export default __Example