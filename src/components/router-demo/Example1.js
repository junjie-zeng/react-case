
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/*
    动态传值
*/
function Index() {
    const [list, setList] = useState([
        { uid: 123, title: '个人博客-1' },
        { uid: 456, title: '个人博客-2' },
        { uid: 789, title: '个人博客-3' },
    ])

    return (
        <div>
            这里是首页
            <ul>
                {
                    list.map(item=><li key = {item.uid}><Link to={`/appRoute/chuancan/list/${item.uid}`}>{item.title}</Link></li>)
                }
            </ul>
        </div>
    )
}

function List(props) {
    const [id, setId] = useState(-1)
    /*
        pach:自己定义的路由规则，可以清楚的看到是可以产地id参数的。
        url: 真实的访问路径，这上面可以清楚的看到传递过来的参数是什么。
        params：传递过来的参数，key和value值。
    */

    useEffect(() => {
        console.log('参数', props.match)
        setId(props.match.params.id)
    }, [id])

    return (
        <div>
            我是列表详情页:{id}
        </div>
    )
}


function Example() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/appRoute/chuancan/home">首页</Link></li>
                </ul>
                <Route path="/appRoute/chuancan/home" component={Index}></Route>
                <Route path="/appRoute/chuancan/list/:id" component={List}></Route>
            </div>
        </Router>
    )

}

export default Example