import React from 'react'

function index(props) {
    console.log(props)
    const { handleAdd, todos } = props

    return (
        <div>
            <h5>函数组件</h5>
            <button onClick={handleAdd}>增加一条</button>
            <br />
            <ul>
                {todos.map((item, index) => <li key={index}>* {item.name}</li>)}
            </ul>
        </div>
    )
}


export default index