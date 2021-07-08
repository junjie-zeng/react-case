import { useState, createContext,useContext } from 'react'

/*
    1. createContext
    2. useContext

*/

const CountContext = createContext()


function Counter(){
    const obj = useContext(CountContext)
    console.log(obj)
    return (<h2>{obj.count}</h2>)
}



function Example() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>你点击的次数 {count}</p>
            <button onClick={() => { setCount(count + 1) }}>点我</button>
            <CountContext.Provider value={{count}}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

export default Example