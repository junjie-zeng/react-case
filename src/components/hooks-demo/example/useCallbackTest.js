

import React, { useState, useCallback,memo } from 'react'



/*
    useCallback 测试
        - 没合适的场景验证

*/

const PageA = (props) => {
    const { onClick, children } = props
    console.log('aa ...')
    return <button onClick={onClick}>点击 {children}</button>
}

const PageB = ({ onClick, name }) => {
    console.log('bb ...')
    return <button onClick={onClick}>点击 {name}</button>
}

const PageC = memo(PageB)

const Index = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const handleClick1 = () => {
        console.log('a ...')
        setA(a + 1)
    }

    // const handleClick2 = () => {
    //     console.log('b ...')
    //     setB(b + 1)
    // }

    const handleClick2 = useCallback(() => {
        console.log('b ...')
        setB(b + 1)
    }, [b])

    return (
        <>
            <PageA onClick={handleClick1}>{a}</PageA>
            <PageB onClick={handleClick2} name={b} />
            {/* <PageC onClick={handleClick2} name={b} /> */}
        </>
    )
}


export default Index