import { useState, useMemo } from 'react'

/*
    useMemo:缓存变量

*/

function ChildComponent(props) {
    const { name, children } = props

    function changeXiaohong(name) {
        console.log('她来了，她来了。小红向我们走来了')
        return name + ' 小红向我们走来了'
    }

    const actionXiaohong = useMemo(() => changeXiaohong(name), [name])

    return (
        <div>
            <p>{actionXiaohong}</p>
            <p>{children}</p>
        </div>
    )
}


function Example() {
    const [xiaohong, setXiaohong] = useState('小红待客状态')
    const [zhiling, setZhiling] = useState('志玲待客状态')

    return (
        <div>
            <button onClick={() => setXiaohong(Date.now())}>小红</button>
            <button onClick={() => setZhiling(Date.now() + ' 志玲向我们走来了')}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </div>
    )

}

export default Example