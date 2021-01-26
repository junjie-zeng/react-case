import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Example1 from './Example1'
import Example2 from './Example2'

/*
    路由
*/

export default function AppRouter() {
    return (
        <Router>
            <div>
                <ul className="left-slider">
                    <li><Link to ="/appRoute/chuancan">动态传参</Link></li>
                    <li><Link to ="/appRoute/redirect">(标签式/编程式)重定向</Link></li>
                </ul>
                <div className="right-content">
                    <h3 className="right-title">路由体验</h3>
                    <div className="right-content-details">
                        <Route path="/appRoute/chuancan/" component={Example1}></Route>
                        <Route path="/appRoute/redirect/" component={Example2}></Route>
                    </div>
                </div>
            </div>
        </Router>
    )
}