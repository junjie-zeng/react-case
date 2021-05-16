

import React, { useState, useEffect } from 'react'

// 每种行为一个Hook（每一个hook为一种行为或者一类行为）
function Dome4() {
    // 行为 1
    const [count,setCount] = useState(0)
    // 行为 2
    const [company,setCompay] = useState('Apple')

    // 行为 3 (一个范围内的，一个领域，一个话题中的知识,这就是一种行为，一种网络请求的行为)
    const [personList,setPersonList] = useState({
        isError:false,
        loading:true,
        data:[]
    })

    return (
        <>
            <h5>4. 每种行为一个Hook</h5>
            <div>
               
            </div>
        </>
    )
}

export default Dome4