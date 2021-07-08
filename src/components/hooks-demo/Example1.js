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

/*
    useState：将数据和行为关联起来了，这种关联是强关联，数据和UI的关联是弱关联

    相同的类型具有相同的行为，我们组合相同类型事物的时候，不能把他们看作是一团东西去组合
    我们因该把他们分散开在组合起来，这叫组合这叫解耦，这就是hooks做的事情，使用我们的界面
    有非常大的解藕能力
*/
// 自定义hook
function useCount(initValue){
    const [count,setCount] = useState(initValue)
    return [count,()=>{
        // setCount(count+1)
        // 函数式更新
        setCount(count=>count+1)
    }]
}

function ___Example() {
    const [count, addCount] = useCount(0)
    return (
        <div>
            <h3>自定义状态hook</h3>
            <p>你点击{count}次</p>
            <button onClick={() => addCount(count + 1)}>点我</button>
        </div>
    )
}




// export default __Example
// export default _Example
export default ___Example