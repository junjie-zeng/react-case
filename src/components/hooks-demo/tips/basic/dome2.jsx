

import React, { useState, useEffect } from 'react'

// hooks 的同步问题
// 目标 让打印与更新同步
function Dome2() {
    const [count, setCount] = useState(0)


    function myEffect() {
        const I = setInterval(() => {
            console.log(count)
            setCount(count => count + 1)
        }, 1000);

        return () => clearInterval(I)
    }


    useEffect(myEffect, [count])


    return (
        <>
            <h5>2. hooks 的同步问题</h5>
            <div>{count}</div>
        </>
    )
}

export default Dome2