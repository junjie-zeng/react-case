import { useState, useEffect, useCallback } from 'react'

/*
    1. 自定义hooks  
    2. useCallback :目的是为了缓存方法(useMemo是为了缓存变量)

*/

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return size
}

function Example() {
    const size = useWinSize()
    return (
        <div>
            <p>页面宽度：{size.width}</p>
            <p>页面高度：{size.height}</p>
        </div>
    )
}







export default Example
