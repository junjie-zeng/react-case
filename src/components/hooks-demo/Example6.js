

import { useEffect, useRef } from 'react'
/*
    useRef 保持标签对象，用于操作dom (useRef是一个容器，这个容器里面保存了ref所指定的节点)

*/

function Example() {
    const inputEl = useRef()

    useEffect(()=>{
        console.log(inputEl)
    })

    const getInputEl = () => {
        inputEl.current.value = 'hello word'
        console.log('dom node',inputEl.current)
    }


    return (
        <div>
            <input ref={inputEl} type="text" /><br/><br/>
            <input ref={inputEl} type="text" /><br/><br/>
            <button onClick={getInputEl}>在input上展示文字</button>
        </div>
    )
}




export default Example