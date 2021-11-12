import React, { useMemo, useState  } from 'react'





/*
    useMemo测试
        测试结果:只有监听的那个状态发生了变化，才去执行 useMemo hook


        结论：useMemo 可以优化当前组件也可以优化子组件，优化当前组件主要是通过 memoize 来将一些复杂的计算逻辑进行缓存。
*/




// index
const Index = () => {
    const [list, setList] = useState([1632280281756])
    const [flag, setFlag] = useState(false)

    // 1. 未使用useMemo，当组件中任何状态发生了变化，这个函数都会执行，如果函数中有复杂的逻辑或者大量的运算，那么这是一个很消耗性能的操作
    const _change1 = () => {
        console.log('普通函数：这里是一段很复杂的逻辑，掺杂了大量运算')
        return flag ? '真' : '假'
    }
    // 2. 使用了useMemo，只有当它依赖的状态发生了变化，那么才会执行这个函数。
    const _change2 =  useMemo(()=>{
        console.log('useMemo 这里是一段很复杂的逻辑，掺杂了大量运算')
        return flag ? '真':'假'
    },[flag])


    // 添加方法
    const handleAdd = ()=>{
        const _list = [...list,Date.now()]
        setList(_list)
    }

    return (
        <>
            <button onClick = {handleAdd}>add list</button>
            <button onClick = {()=>setFlag(!flag)}>真假改变</button>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>--- {item} ---</li>
                    ))
                }
            </ul>
            <h5>普通函数 flag的状态为：{_change1()}</h5>
            <h5>使用了useMemo flag的状态为：{_change2}</h5>
        </>
    )
}

export default Index