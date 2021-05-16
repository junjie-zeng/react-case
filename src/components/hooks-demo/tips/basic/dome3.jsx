

import React, { useState, useEffect } from 'react'

// 模拟延迟
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

async function getPerson() {
    // 模拟获取接口数据（sleep延迟函数，假装调用接口需要花费时间）
    await sleep(200)
    return ['a', 'b', 'c']
}


function usePerson() {
    const [list, setList] = useState(null)

    async function request() {
        const list = await getPerson()
        setList(list)
    }
    useEffect(request, [])

    return list
}

// 可以构造自己的hooks封装行为
function Dome3() {
    const list = usePerson()

    if (list == null) {
        return <div>Lodding ...</div>
    }


    return (
        <>
            <h5>3. 可以构造自己的hooks封装行为</h5>
            <ul>
                {
                    list.map((item,i)=>{
                        return <li key = {i}>{item}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Dome3