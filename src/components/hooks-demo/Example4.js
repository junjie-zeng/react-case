import { useReducer, createContext, useContext } from 'react'

/*

    useReducer
*/

// useReducer 初体验
function Example() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)

    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={() => dispatch('add')}>加</button>
            <button onClick={() => dispatch('sub')}>减</button>
        </div>
    )
}

// 小案例 

// 共享的color.js
const ColorContext = createContext()
const UPDATE_COLOR = "update-color"

const _reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

const Color = props => {
    const [color, dispatch] = useReducer(_reducer, 'pink')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}

function ShowArea() {
    const { color } = useContext(ColorContext)
    return (<div style={{ color: color }}>字体颜色为{color}</div>)
}

function Buttons() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => { dispatch({ type: 'update-color', color: 'pink' }) }}>pink</button>
            <button onClick={() => { dispatch({ type: 'update-color', color: 'blue' }) }}>blue</button>
        </div>
    )
}

function _Example() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default _Example