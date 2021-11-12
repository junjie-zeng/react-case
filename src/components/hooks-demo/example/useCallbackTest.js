

import React, { useState, useCallback, memo } from 'react'



/*
    https://juejin.cn/post/6844904101445124110

    useCallback 测试
        - 简单来说就是返回一个函数，只有在依赖项发生变化的时候才会更新（返回一个新的函数）



        注：React.memo 这个方法，此方法内会对 props 做一个浅层比较，如果如果 props 没有发生改变，则不会重新渲染此组件。
        注：尽管组件内部有用 React.memo 来做优化，但是我们声明的 handleClick1 是直接定义了一个方法，这也就导致只要是父
            组件重新渲染（状态或者props更新）就会导致这里声明出一个新的方法，新的方法和旧的方法尽管长的一样，但是依旧是两
            个不同的对象，React.memo 对比后发现对象 props 改变，就重新渲染了。


        注：handleClick2 方法，这里 useCallback 就会根据 count2 是否发生变化，从而决定是否返回一个新的函数，函数内部作用域也随之更新。
            由于我们的这个方法只依赖了 count2 这个变量，而且 count2 只在点击 Button2 后才会更新 handleClick2，所以就导致了我们点击
             Button1 不重新渲染 Button2 的内容。


        结论：useCallback 是来优化子组件的，防止子组件的重复渲染


*/



const Button = (props) => {
    const { onClick, children } = props
    console.log(props.name)
    return <button onClick={onClick}>{children}</button>
}


// memo
const ButtonA = memo(Button)




const Index = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick1 = () => {
        console.log('a ...')
        setCount1(count1 + 1)
    }

    const handleClick2 = useCallback(() => {
        console.log('b ...')
        setCount2(count2 + 1)
    }, [count2])

    return (
        <>
            <h5>普通</h5>
            <Button onClick={handleClick1} name={'按钮1'}>按钮1</Button>
            {/* 该组件只有count2发生了变化才会重新渲染 */}
            <Button onClick={handleClick2} name={'按钮2'}>按钮2</Button>

            <h5>React.memo</h5>
            <ButtonA onClick={handleClick1} name={'按钮3'}>按钮3</ButtonA>
             {/* 该组件只有count2发生了变化才会重新渲染 */}
            <ButtonA onClick={handleClick2} name={'按钮4'}>按钮4</ButtonA>
        </>
    )
}


export default Index