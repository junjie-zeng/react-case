

import React from 'react'


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

