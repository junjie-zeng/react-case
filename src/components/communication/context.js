

import React from 'react'
/*
      react-context是什么呢？
				1) Context 提供了一个无需为每层组件手动添加 props，就能在组件树之间进行数据传递的方法。
				2) 意思便是context能够不必显式地通过组件树的逐层传递 props，可以跨层级进行数据传递。
				3) 其实质就是给跨层级的组件搭建一座桥梁。
				4) context 有三个核心， React.createContext()、Provider(发布者)、Consumer(订阅者)
                    createContext()创建一个 Context 对象。如果要Context发挥作用，需要用到两种组件，
                    一个是Context生产者(Provider)，通常是一个父节点，另外是一个Context的消费者(Consumer)，
                    通常是一个或者多个子节点。Provider 接收一个value属性，传递给消费组件，消费者通过function
                    的参数接收顶层传入的数据。
				5) 综上就是Context 可以让我们无须繁琐的传递props，就能将值传递到各个组件。

*/

const StateContext = React.createContext()


// 跨多层次组件通信
// 父
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // card 数据
            card: {
                name: '小明',
                age: 18
            }
        }
    }

    render() {
        return (
            <div style={{ padding: '10px' }}>
                <StateContext.Provider value={this.state.card}>
                    <Child />
                </StateContext.Provider>
            </div>
        )
    }
}

// 子

class Child extends React.Component {
    // 消费方式 1
    static contextType = StateContext
    render() {
        console.log(this)
        const { name, age } = this.context
        return (
            <div>
                <p>my name is {name} my old {age}</p>
                <Son />
            </div>

        )
    }
}

// 孙子

class Son extends React.Component {
    render() {
        console.log(this)
        return (
            //  消费方式 2
            <StateContext.Consumer>
                {
                    (value) => (
                        <h1>my name is {value.name} my old {value.age}</h1>
                    )

                }
            </StateContext.Consumer>
        )
    }
}




export default Parent

