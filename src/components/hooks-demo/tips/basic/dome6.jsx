


import React, { useState, useCallback } from 'react'


const Demo6 = () => {
    const [count, setCount] = useState(1)
  


    return (
        <>
            <h5>2. 使用useCallback缓存函数</h5>
            <h6>count {count}</h6>
           
        </>
    )
}

export default Demo6