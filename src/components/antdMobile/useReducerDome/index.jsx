import { Tabs, WhiteSpace, SearchBar, InputItem } from 'antd-mobile';
import { useReducer, createContext, useContext, useMemo, useEffect, useState, useRef } from 'react'
import useCallbackReducer from './useCallbackReducer.js'


/*

    模糊查询 多个条件
*/


const PAYMENTACCOUNTORNUMBER = 'PAYMENTACCOUNTORNUMBER'
const RUNNINGDATE = 'RUNNINGDATE'
const PROJECTNAMEORNUMBER = 'PROJECTNAMEORNUMBER'
const RESEY = 'RESEY'
const TAB = 'TAB'

function _interface(param) {
    console.log('请求参数...', param)
}




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



function Index() {
    const [currentTab, setCurrentTab] = useCallbackState1(1)

    const [condition, dispatch] = useCallbackReducer()

    useEffect(() => {
        // console.log('useEffect',condition)

        _interface(condition)

        // return ()=>{
        //     console.log("销毁.")
        // }
    }, [])


    function updateReducer(val, type) {
        if (type == PAYMENTACCOUNTORNUMBER) {
            dispatch({ type, payload: { paymentAccountOrNumber: val } })
        } else if (type == RUNNINGDATE) {
            dispatch({ type, payload: { runningDate: val } })
        } else if (type == PROJECTNAMEORNUMBER) {
            dispatch({ type, payload: { projectNameOrNumber: val } })
        }
    }

    const handleSearchSubmit = (val, type) => {
        updateReducer(val, type)
        console.log("提交条件...", condition)
        // _interface(condition)
    }

    const handleSearchChange = (val, type) => {
        updateReducer(val, type)
        console.log("搜索条件...", condition)
    }

    const reset = () => {
        dispatch({ type: RESEY }, (val) => {
            console.log('重置 ...', val)
        })
    }



    const tabs = [1, 2, 3]

    const handleTab = (item) => {

        dispatch({
            type: TAB,
            payload: {
                tab: item,
                paymentAccountOrNumber: '',
                runningDate: '',
                projectNameOrNumber: ''
            }
        }, (val) => {
            console.log('tab ...', val)
        })

    }

    const getData = () => {
        console.log('get data', condition)
    }

    return (
        <>
            <h5>useReducer(多状态)</h5>
            <div>
                {
                    tabs.map((item, index) => (
                        <button key={index} style={{ width: '50px', background: (item == condition.tab ? 'red' : '') }} onClick={() => handleTab(item)}>{item}</button>
                    ))
                }
            </div>
            <SearchBar placeholder="请输入付款账户名称/账户号" value={condition.paymentAccountOrNumber}
                onChange={(val) => { handleSearchChange(val, PAYMENTACCOUNTORNUMBER) }}
                onSubmit={(val) => handleSearchSubmit(val, PAYMENTACCOUNTORNUMBER)}
                onClear={() => updateReducer('', PAYMENTACCOUNTORNUMBER)} />

            {
                (condition.tab == 2 || condition.tab == 3) && (

                    <SearchBar placeholder="项目名称/编号" value={condition.projectNameOrNumber}
                        onChange={(val) => { handleSearchChange(val, PROJECTNAMEORNUMBER) }}
                        onSubmit={(val) => handleSearchSubmit(val, PROJECTNAMEORNUMBER)}
                        onClear={() => updateReducer('', PROJECTNAMEORNUMBER)} />
                )
            }

            <SearchBar placeholder="流水日期" value={condition.runningDate}
                onChange={(val) => { handleSearchChange(val, RUNNINGDATE) }}
                onSubmit={(val) => handleSearchSubmit(val, RUNNINGDATE)}
                onClear={() => updateReducer('', RUNNINGDATE)} />

            <button onClick={reset}>重置</button>
            <button onClick={getData}>获取数据</button>

            <ul>
                <li>请输入付款账户名称/账户号 {condition.paymentAccountOrNumber}</li>
                {
                    (condition.tab == 2 || condition.tab == 3) && (

                        <li>项目名称/编号 {condition.projectNameOrNumber}</li>
                    )
                }

                <li>流水日期 {condition.runningDate}</li>
            </ul>
        </>
    )
}




export default Index