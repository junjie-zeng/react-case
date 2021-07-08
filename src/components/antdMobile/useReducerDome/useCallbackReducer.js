import { useReducer, createContext, useContext, useMemo, useEffect, useState, useRef } from 'react'


/**
        自定义useRedurce
            1. 使用场景
                资金计划日月结流水匹配首页列表：筛选条有多个
                a. 如果使用useState那么有多少个条件就得定义多少个useState，交互的动作更改会涉及到多个状态的修改，不利于维护
                b. 使用useRedurce方便维护，但是useRedurce 更新后在别的动作中拿不到最新的状态
                c. 封装自己的useRedurce ，自定义dispatch函数可传递两个参数，第一个参数依然是值，第二个参数是一个回调，这个
                    回调会在useEffect监听到状态的变化时执行，执行并传递最新的状态，因此每次更新都能拿到最新的值。
                
 */



const PAYMENTACCOUNTORNUMBER = 'PAYMENTACCOUNTORNUMBER'
const RUNNINGDATE = 'RUNNINGDATE'
const PROJECTNAMEORNUMBER = 'PROJECTNAMEORNUMBER'
const RESEY = 'RESEY'
const TAB = 'TAB'


const initState = {
    paymentAccountOrNumber: '123455',
    runningDate: '2021-01-01',
    projectNameOrNumber: '3sss',
    tab: '1'
}

const reducer = (state, action) => {
    // console.log(state, action)
    switch (action.type) {
        case PAYMENTACCOUNTORNUMBER:
            return { ...state, paymentAccountOrNumber: action.payload.paymentAccountOrNumber }
        case RUNNINGDATE:
            return { ...state, runningDate: action.payload.runningDate }
        case PROJECTNAMEORNUMBER:
            return { ...state, projectNameOrNumber: action.payload.projectNameOrNumber }
        case RESEY:
            return { ...state, paymentAccountOrNumber: '', runningDate: '', projectNameOrNumber: '' }
        case TAB:
            return { ...state, ...action.payload }
        default:
            return state
    }
}


// 同步获取 userRedurce最新的值
function useCalbackRedurce(reducer, initState) {

    const callBackRef = useRef();
    const [data, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        callBackRef.current && callBackRef.current(data);
    }, [data]);

    return [data, (value, cb) => {
        callBackRef.current = cb
        dispatch(value)
    }]
}



// 同步获取useState的最新状态值

function useCallbackState1(state) {
    const cbRef = useRef();
    const [data, setData] = useState(state);

    useEffect(() => {
        cbRef.current && cbRef.current(data);
    }, [data]);

    return [data, function (val, callback) {
        cbRef.current = callback;
        setData(val);
    }];
}

export default () => useCalbackRedurce(reducer, initState)


