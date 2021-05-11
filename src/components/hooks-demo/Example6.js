

import { useEffect, useRef } from 'react'
/*
    useRef 保持标签对象，用于操作dom

*/

function Example() {
    const inputEl = useRef(null)

    useEffect(()=>{
        console.log(inputEl)
    })

    const onButtonClick = () => {
        inputEl.current.value = 'hello word'
        console.log('dom node',inputEl)
    }


    return (
        <div>
            <input ref={inputEl} type="text" /><br/><br/>
            <input ref={inputEl} type="text" /><br/><br/>
            <button onClick={onButtonClick}>在input上展示文字</button>
        </div>
    )
}




export default Example