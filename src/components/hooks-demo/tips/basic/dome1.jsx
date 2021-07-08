

import React, { useState, memo, useMemo } from 'react'





function Dome1() {

    const [count, setCount] = useState(0)
    const [val, setValue] = useState('修改我啊，expensive不会执行')

    
    // 如果不使用useMemo，不管是count还是val数据发生变化的时候都会执行expensive，而expensive里面又有大量的计算，所以是一个非常消耗性能对操作
    // 使用了useMemo之后，通过它依赖的数据发生了变化，才重新执行这个函数。在修改val的时候，返回上一次缓存的值
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count])

    return (
        <>
            <h5>1. 使用React.memo减少重绘次数</h5>
            <div>
                <h4>{count}-{val}-{expensive}</h4>
                <button onClick={() => setCount(count + 1)}>count 变化</button> &nbsp;
                <input value={val} onChange={event => setValue(event.target.value)} />
            </div>
        </>
    )
}

export default Dome1