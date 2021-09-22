import React, { useEffect, useState, useMemo } from 'react'

/*
    嵌套组件测试
        - 测试:当父组件状态发生了变化，子组件是否会重新渲染，子组件中的函数是否会重新渲染
            1. 父组件状态发生了变化，子组件不会重新渲染
            2. 父组件状态发生了变化，子组件中的函数会重新渲染
                解决：使用useMemo，只有依赖的状态发生了变化才会重新执行

*/




const Child = () => {


    useEffect(() => {
        console.log('子组件初始化 ...')
    }, [])

    const _text1 = () => {
        console.log('_text1 ...')
        return 'hello word'
    }

    const _text2 = useMemo(() => {
        console.log('_text2 ...')
        return 'hello word'
    }, [])

    return (
        <>
            <h6>{_text1()}</h6>
            <h6>{_text2}</h6>
        </>
    )
}



const Index = () => {
    const [flag, setFlag] = useState(false)



    return (
        <>
            <button onClick={() => setFlag(!flag)}>{flag ? '点击' : 'click'}</button>
            <hr />
            <Child />
        </>
    )
}

export default Index