

import React from 'react'


const StateContext = React.createContext()


// 跨多层次组件通信
// 父
class Parent extends React.Component {
    render() {
        return (
            <div style={{ padding: '10px' }}>
                <StateContext.Provider value="小明">
                    <Child />
                </StateContext.Provider>
            </div>
        )
    }
}

// 子

class Child extends React.Component {
    render() {
        return (
           <Son/>
        )
    }
}

// 孙子

class Son extends React.Component {
    

    render() {
        return (
            <StateContext.Consumer>
                {value => <p>my name is  {value}</p>}
            </StateContext.Consumer>
        )
    }
}




export default Parent

