
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'


/*

    标签式重定向/编程式重定向
*/



function Example(props) {

    const { history } = props
    
    useEffect(()=>{
        // 编程式重定向
        history.push('/appRoute/chuancan/home')
    },[])

    return (

        <div>
            {/* 标签式重定向 */}
            <Redirect to = "/appRoute/chuancan/home"/>
            example2
        </div>

    )
}

export default Example